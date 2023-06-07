import SelectChallenge from '@shared/SelectChallenge/SelectChallenge';
import { client } from '@src/api/apolloClient';
import { ADD_CHALLENGE_TO_TEAM } from '@src/api/mutations';
import { GraphQLError } from 'graphql';
import React, { useState } from 'react';
import DatePicker from "react-datepicker";

type FormChallengeProps = {
  teamId: string;
  challenge: { id: string, challengeName: string};
  setChallenge: (challenge: { id: string, challengeName: string} ) => void;

};

const FormChallenge = (props: FormChallengeProps) => {
  const [errorChallenge, setErrorChallenge] = useState<GraphQLError | null>(null);
  const [successChallenge, setSuccessChallenge] = useState(false);

  const [startsAt, setStartsAt] = useState<Date | null>(null);
  const [endAt, setEndAt] = useState<Date | null>(null);
  const onChangeDate = (dates: [any, any]) => {
    const [start, end] = dates;
    setStartsAt(start);
    setEndAt(end);
  };

  const submitChallenge = async () => {
    setSuccessChallenge(false);
    setErrorChallenge(null);
    try {
      await client.mutate({
        mutation: ADD_CHALLENGE_TO_TEAM,
        variables: {
          teamId: props.teamId,
          challengeId : props.challenge.id,
          startsAt : startsAt?.toDateString(),
          endAt: endAt?.toDateString(),
        },
      });
      setSuccessChallenge(true);
    } catch (error) {
      setErrorChallenge(error as GraphQLError);
    }
  };

  return (
    <form
        className="w-10/12 mx-auto my-8 flex flex-col"
        onSubmit={async (event) => {
          event.preventDefault();
          await submitChallenge();
        }}
      >
        <fieldset className="flex flex-col">
          <legend className="font-medium text-2xl text-primary">Je choisi mon challenge</legend>
          <SelectChallenge setChallenge={props.setChallenge} />

          <label htmlFor="period">Période *</label>
          <DatePicker
            selected={startsAt}
            onChange={onChangeDate}
            startDate={startsAt}
            endDate={endAt}
            minDate={new Date()}
            selectsRange={true}
            monthsShown={2}
            isClearable={true}
            placeholderText="Click to select a date"
            className="input-launch-chall"
          />
          <input type="submit" value="valider" />
          {errorChallenge && <div>{errorChallenge.message}</div>}
          {successChallenge && (
            <div>
              Challenge ajouté !
            </div>
          )}
        </fieldset>
      </form>
  )
}

export default FormChallenge