import { UserRole } from '@gql/graphql';
import Button from '@shared/Buttons/Button';
import { client } from '@src/api/apolloClient';
import { CREATE_USER_TO_TEAM } from '@src/api/mutations';
import { GraphQLError } from 'graphql';
import React, { useState } from 'react'

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
  const [successInvitation, setSuccessInvitation] = useState(false);
  const [guestEmail, setGuestEmail] = useState("");
  
  const submitInvitation = async () => {
    setSuccessInvitation(false); 
    setErrorInvitation(null);
    try {
      await client.mutate({
        mutation: CREATE_USER_TO_TEAM,
        variables: {
          teamId: props.teamId,
          userEmail: guestEmail,
          userRole: UserRole.Player,
          challengeName: props.challengeName
        },
      });
      setSuccessInvitation(true);
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

          <label htmlFor="period">Email *
            <input
              className="input-launch-chall"
              type="email"
              id="email"
              name="email"
              value={guestEmail}
              placeholder="invite@exemple.com"
              onChange={(e) => setGuestEmail(e.target.value)}
            />
          </label>
          <div className="py-5 flex justify-end">
            <Button name="Send & Go step 4  >>" size="max-w-fit" type="button-primary" />
          </div>
            {errorInvitation && <p className="text-error">{errorInvitation.message}</p>}
        </fieldset>
      </form>
  )
}

export default FormInvitation