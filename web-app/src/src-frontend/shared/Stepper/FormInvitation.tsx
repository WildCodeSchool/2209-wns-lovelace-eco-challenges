import { UserRole } from '@gql/graphql';
import { client } from '@src/api/apolloClient';
import { CREATE_USER_TO_TEAM } from '@src/api/mutations';
import { GraphQLError } from 'graphql';
import React, { useState } from 'react'

type FormInvitationProps = {
  teamId: string;
  challengeName: string
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
    } catch (error) {
      setErrorInvitation(error as GraphQLError);
    }

  }
  return (
    <form
        className="w-10/12 mx-auto my-8 flex flex-col"
        onSubmit={async (event) => {
          event.preventDefault();
          await submitInvitation();
        }}
      >
        <fieldset className="flex flex-col">
          <legend className="font-medium text-2xl text-primary"> J&apos;invite des participants</legend>

          <label htmlFor="period">Email *</label>
          <input
            className="input-launch-chall"
            type="email"
            id="email"
            name="email"
            value={guestEmail}
            placeholder="invite@exemple.com"
            onChange={(e) => setGuestEmail(e.target.value)}
          />
          <input type="submit" value="valider" />
          {errorInvitation && <div>{errorInvitation.message}</div>}
          {successInvitation && (
            <div>
              Invitations envoyées
            </div>
          )}
        </fieldset>
      </form>
  )
}

export default FormInvitation