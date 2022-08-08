import { createBoard } from "@wixc3/react-board";
import { Repository } from "../../../components/pages/overview/popular-repositories/repository/repository";

export default createBoard({
  name: "Repository - long texts",
  Board: () => (
    <Repository
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      forks={13}
      language="php"
      name="lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-sed-do-eiusmod-tempor-incididunt-ut-labore"
      stars={42}
      url="#mocked-repo-url"
    />
  ),
  environmentProps: {
    canvasWidth: 400,
  },
});
