import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NavItems from './NavItems'; // Assuming NavItems is in the same directory
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

it('should render the menu icon',  () => {
    // const toggleNav = jest.fn();
    
    // Arrange
    render(
    <BrowserRouter>
        <NavItems 
        toggleNav={() => console.log("nav toggled")}
        />
    </BrowserRouter>
    ); 
    
    // Act
    const blackCross =  screen.getByAltText('Close menu');
    
    // Assert
    expect(blackCross).toBeInTheDocument();
    
});

it('should render the Home nav link', () => {
    // ARRANGE
    render(
        <BrowserRouter>
            <NavItems 
            toggleNav={() => console.log("nav toggled")}
            />
        </BrowserRouter>
    )

    //ACT
    const menuString = screen.getByText(/Home/i)

    //ASSERT
    expect(menuString).toBeInTheDocument();
})

// it('should close the naviagtion window when the menu nav link is selected', async () => {
//     // ARRANGE
//     render(
//     <BrowserRouter>
//         <NavItems 
//         toggleNav={() => console.log("nav toggled")}
//         />
//     </BrowserRouter>)

//     // ACT
//     const menuIcon = screen.getByLabelText(/menu/i)
//     await menuIcon.click();
//     const selectMenu = screen.getByRole("link", {name: /Home/i})
//     await userEvent.click(selectMenu)

//     //ASSERT
//     const homeScreen = screen.queryByText(/Home/i)
//     expect(homeScreen).toBeNull()
// })

it('should close the navigation window when the menu nav link is selected', async () => {
    // Define a test component that wraps NavItems and manages the state for toggling the navigation window
    const TestComponent = () => {
        const [showNav, setShowNav] = useState<boolean>(false);

        const toggleNav = () => {
            setShowNav(!showNav);
        };

        return (
            <div>
                <button onClick={toggleNav} aria-label="Toggle Navigation">Toggle Navigation</button>
                {showNav && <NavItems toggleNav={toggleNav} />}
            </div>
        );
    };

    // Render the test component wrapped in BrowserRouter
    render(
        <BrowserRouter>
            <TestComponent />
        </BrowserRouter>
    );

    // ACT: Simulate clicking the menu icon to open the navigation
    const toggleButton = screen.getByLabelText(/Toggle Navigation/i);
    userEvent.click(toggleButton);

    // ACT: Simulate clicking the "Home" menu link
    const selectMenu = await screen.findByRole("link", { name: /Home/i });
    userEvent.click(selectMenu);

    // ASSERT: Ensure that the navigation is closed by checking the absence of the "Home" menu link
    await waitFor(() => {
        const selectMenuAfterClick = screen.queryByRole("link", { name: /Home/i });
        expect(selectMenuAfterClick).toBeNull();
    });
});
