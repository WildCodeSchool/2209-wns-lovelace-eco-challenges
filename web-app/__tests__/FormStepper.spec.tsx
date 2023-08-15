
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { CreateTeamMutation, CreateUserToTeamMutation, Mutation, UserRole } from '@gql/graphql';
import { CREATE_TEAM, CREATE_USER_TO_TEAM } from '@src/api/mutations';
import FormStepper from '@shared/FormStepper/FormStepper';
import userEvent from '@testing-library/user-event';

URL.createObjectURL = jest.fn(() => 
"https://mocked-image-url");

const renderFormStepper = ( mocks: MockedResponse<Mutation>[] = []) => {
  return render (
    <MockedProvider mocks={mocks}>
      <FormStepper />
    </MockedProvider>
  )
}

describe("FormStepper", () => {
  it('renders correctly Step 1', async () => {
    renderFormStepper()

    const stepperSteps = ['1', '2', '3', '4'];
    await waitFor(() => {
      const stepper = screen.getAllByTestId("stepper")
      stepperSteps.forEach((value, i) => 
        expect(stepper[i]).toHaveTextContent(value)
        )
    });

    fireEvent.change(screen.getByLabelText(/Nom de ma Team/i), { target: { value: "Team test" } });
    fireEvent.change(screen.getByLabelText(/Ville/i), { target: { value: "Paris"} });
    fireEvent.change(screen.getByLabelText(/Pays/i), { target: { value: "France"} });
    const input = screen.getByLabelText(/Fanion, photo.../i);
    fireEvent.change(input, {target: { files: [ "mocked-image-url.png"]}})

    expect(screen.getByTestId("img-team")).toBeInTheDocument();
  });



    // const teamId = '0cc132ba-faa0-4ded-97e5-f3cbaeca2446';
    // const createTeamMock : MockedResponse<CreateTeamMutation> = {
    //   request: {
    //     query: CREATE_TEAM,
    //     variables: {
    //       teamName: "Team Test",
    //       city: "Paris",
    //       country: "France",
    //       isPublic: true,
    //       img : "imgtest.png1689862547226.png"
    //     }
    //   },
    //   result: {
    //     data: { 
    //       createTeam: { 
    //         id: teamId,
    //         teamName: "Team test"
    //       } 
    //     } 
    //   }
    // };
    // const createUserToTeamMock : MockedResponse<CreateUserToTeamMutation> = {
    //   request: {
    //     query: CREATE_USER_TO_TEAM, 
    //     variables: {
    //       teamId: teamId, 
    //       userEmail: props.userEmail,
    //       userRole: UserRole.Player, 
    //     }
    //   },
    //   result: {
    //     data: {
    //       createUserToTeam: {
    //         team: {
    //           teamName: "Team test",
    //           challengeToTeams: []
    //         },
    //         userRole: UserRole.Player,
    //         user: {
    //           email: props.userEmail
    //         }
    //       }
    //     }
    //   }
    // };




  //   // Checkbox "Groupe ouvert"
  //   fireEvent.click(screen.getByLabelText(/Groupe ouvert/i));

  //   fireEvent.submit(screen.getByText(/Confirm & Go step 2 >>/i));

  //   await waitFor(() => {
  //     expect(props.setCurrentStep).toHaveBeenCalledWith(2);
  //   });
  //   expect(props.setTeamId).toHaveBeenCalledWith(teamId)
  // });
});





