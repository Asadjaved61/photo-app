import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import Articles from "./components/Articles";

Enzyme.configure({ adapter: new Adapter() });

describe("app", () => {
  it("app should render", () => {
    const app = shallow(<App />);
    app.render();
  });

  it("should render articles", () => {
    const itemsArray = [
      {
        albumId: 1,
        id: 1,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
      },
    ];
    const wrapper = shallow(<Articles items={itemsArray} />);

    const items = wrapper.find('div[class="item"]');
    expect(items).toHaveLength(itemsArray.length);
    expect(items.first().text()).toEqual("Shopping");
  });
});
