import { useQuery } from "@apollo/client";
import { GetChallengesLightQuery } from "@gql/graphql";
import { client } from "@src/api/apolloClient";
import { CHALLENGES_LIGHT } from "@src/api/queries";
import Select from 'react-select';

type Props = { setChallenge: React.Dispatch<React.SetStateAction<any>> };

type Option = {
  value: string
  label: string
}

const SelectChallenge = ({ setChallenge }: Props) => {

  const { data, error, refetch } = useQuery<
    GetChallengesLightQuery
  >(CHALLENGES_LIGHT, {
    client,
    fetchPolicy: "cache-and-network" 
  })

  const listChallenges = data?.challengesLight.map(el => ({ value: el.id, label: el.challengeName }))

  const handleChange = (option: Option | null ) => {
    setChallenge({ id: option?.value, challengeName: option?.label })
  }

  return (
    <Select
      name="challenges"
      options={listChallenges}
      isSearchable={true}
      isClearable={true}
      onChange={handleChange}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: 'black',
          width: '100%', 
        }),
      }}
    />
  );
};

export default SelectChallenge;