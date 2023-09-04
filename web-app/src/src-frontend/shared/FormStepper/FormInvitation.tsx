import Add from '@assets/logos/Add';
import { UserRole } from '@gql/graphql';
import Button from '@shared/Buttons/Button';
import { client } from '@src/api/apolloClient';
import { CREATE_USER_TO_TEAM } from '@src/api/mutations';
import { GraphQLError } from 'graphql';
import React, { ChangeEvent, useState } from 'react'

type FormInvitationProps = {
  teamId: string;
  challengeName: string; 
  currentStep: number; 
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>; 
  setComplete: React.Dispatch<React.SetStateAction<boolean>>;
  steps: number[];
};

const FormInvitation = (props: FormInvitationProps) => {
  const [errorInvitation, setErrorInvitation] = useState<GraphQLError | null>(null);
  const [guestEmails, setGuestEmails] = useState([{ email: ""},{ email: ""},{ email: ""} ])

  const handleEmailChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    let data: any = [...guestEmails];
    data[index][event.target.name]= event.target.value;
    setGuestEmails(data);
  };

  const addField= () => {
    let newField = { email: ""}
    setGuestEmails([...guestEmails, newField])
  };

  const submitInvitation = async () => {
    setErrorInvitation(null);
    const cleanGuestEmails = guestEmails.filter((value, index, self) => {
      if (value.email.length === 0) {
        return false;
      }
      return index === self.findIndex((t) => (
        t.email === value.email
      ))
    })
    try {
      cleanGuestEmails.forEach(async email => 
        await client.mutate({
          mutation: CREATE_USER_TO_TEAM,
          variables: {
            teamId: props.teamId,
            userEmail: email.email,
            userRole: UserRole.Player,
            challengeName: props.challengeName
          },
        })
      )
      props.currentStep === props.steps.length
      ? props.setComplete(true)
      : props.setCurrentStep((prev) => prev + 1);
    } catch (error) {
      setErrorInvitation(error as GraphQLError);
    }

  }
  return (
    <form
        className="mb-5 flex flex-col justify-center"
        onSubmit={async (event) => {
          event.preventDefault();
          await submitInvitation();
        }}
      >
        <fieldset className="flex flex-col justify-center space-y-3">
          <legend className="font-medium text-2xl text-primary pb-5"> J&apos;invite des participants</legend>

        {guestEmails.map((input, index) => 
            <div key={index}>
              <label htmlFor="email">Email invité {index +1}
                <input
                  className="input-launch-chall"
                  type="email"
                  id="email"
                  name="email"
                  value={input.email}
                  placeholder="invite@exemple.com"
                  onChange={(e) => handleEmailChange(index, e)}
                />
              </label>
            </div>
        )}
          <div className="group flex items-center w-fit">
            <Add className="w-10 h-auto fill-primary group-hover:fill-secondary" onClick={addField}/>
            <span className="opacity-0 group-hover:opacity-100 ml-2">Ajouter des invités</span>
          </div>
          <div className="py-5 flex justify-end">
            <Button name="Send & Go step 4  >>" size="max-w-fit" type="button-primary" />
          </div>
            {errorInvitation && <p className="text-error">{errorInvitation.message}</p>}
        </fieldset>
      </form>
  )
}

export default FormInvitation