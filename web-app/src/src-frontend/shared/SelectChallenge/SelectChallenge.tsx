import { useQuery } from "@apollo/client";
import { GetChallengesLightQuery } from "@gql/graphql";
import { client } from "@src/api/apolloClient";
import { CHALLENGES_LIGHT } from "@src/api/queries";
import Select from 'react-select';

type Props = { setChallengeId: React.Dispatch<React.SetStateAction<any>> };

type Option = {
  value: string;
  label: string
}

const SelectChallenge = ({ setChallengeId }: Props) => {

  const { data, error, refetch } = useQuery<
    GetChallengesLightQuery
  >(CHALLENGES_LIGHT, {
    client,
    fetchPolicy: "cache-and-network" 
  })

  const listChallenges = data?.challengesLight.map(el => ({ value: el.id, label: el.challengeName }))

  const handleChange = (option: Option | null ) => {
    setChallengeId(option?.value)
  }

  return (
    <Select
      name="challenges"
      options={listChallenges}
      isSearchable={true}
      isClearable={true}
      onChange={handleChange}
    />
  );
};

export default SelectChallenge;