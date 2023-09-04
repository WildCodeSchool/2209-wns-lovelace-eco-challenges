import Button from '@shared/Buttons/Button';
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
  currentStep: number; 
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  setComplete: React.Dispatch<React.SetStateAction<boolean>>;
  steps: number[];
};

const FormChallenge = (props: FormChallengeProps) => {
  const [errorChallenge, setErrorChallenge] = useState<GraphQLError | null>(null);

  const [startsAt, setStartsAt] = useState<Date | null>(null);
  const [endAt, setEndAt] = useState<Date | null>(null);
  const onChangeDate = (dates: [any, any]) => {
    const [start, end] = dates;
    setStartsAt(start);
    setEndAt(end);
  };

  const submitChallenge = async () => {
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
      props.currentStep === props.steps.length
      ? props.setComplete(true)
      : props.setCurrentStep((prev: number) => prev + 1);
    } catch (error) {
      setErrorChallenge(error as GraphQLError);
    }
  };
  
  return (
    <form
        className="mb-5 flex flex-col justify-center"
        onSubmit={async (event) => {
          event.preventDefault();
          await submitChallenge();
        }}
      >
        <fieldset className="flex flex-col justify-center space-y-3">
          <legend className="font-medium text-2xl text-primary pb-5">Je choisi mon challenge</legend>
          <SelectChallenge setChallenge={props.setChallenge} />

          <div className="flex flex-col">
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
          </div>


          <div className="py-5 flex justify-end">
            <Button name="Confirm & Go step 3  >>" size="max-w-fit" type="button-primary" />
          </div>
          {errorChallenge && <p className="text-error text-center">{errorChallenge.message}</p>}
        </fieldset>
      </form>
  )
}

export default FormChallenge