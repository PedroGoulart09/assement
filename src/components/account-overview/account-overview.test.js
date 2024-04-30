import { render, screen } from "@testing-library/react";
import AccountOverview from "./account-overview";

describe("AccountOverview", () => {
  const mockData = {
    supportContact: {
      name: "John Doe",
      email: "johndoe@example.com",
    },
  };

  it("renders the account overview section", () => {
    render(<AccountOverview data={mockData} />);
    const accountOverviewSection = screen.getByText("Account Overview");
    expect(accountOverviewSection).toBeInTheDocument();
  });

  it("renders the support contact name", () => {
    render(<AccountOverview data={mockData} />);
    const supportContactName = screen.getByText("John Doe");
    expect(supportContactName).toBeInTheDocument();
  });

  it("renders the support contact email", () => {
    render(<AccountOverview data={mockData} />);
    const supportContactEmail = screen.getByText("johndoe@example.com");
    expect(supportContactEmail).toBeInTheDocument();
  });
});
