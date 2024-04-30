import { render, screen } from "@testing-library/react";
import Card from "./card";

describe("Card", () => {
  const data = {
    salesOverview: {
      uploads: 10,
      linesSaved: 20,
      successfulUploads: 80,
    },
  };

  it("renders the card component with correct data", () => {
    render(<Card data={data} />);

    // Assert that the sales text is rendered with correct values
    const salesTextElement = screen.getByText(/You had/i);
    expect(salesTextElement).toBeInTheDocument();
    expect(salesTextElement).toHaveTextContent("10 uploads");
    expect(salesTextElement).toHaveTextContent("20 lines added");

    // Assert that the upload success and lines saved percentages are rendered
    const uploadSuccessElement = screen.getByText(/UPLOAD SUCCESS/i);
    expect(uploadSuccessElement).toBeInTheDocument();
    expect(uploadSuccessElement).toHaveTextContent("UPLOAD SUCCESS");

    const linesSavedElement = screen.getByText(/LINES SAVED/i);
    expect(linesSavedElement).toBeInTheDocument();
    expect(linesSavedElement).toHaveTextContent("LINES SAVED");
  });
});
