import UserView from "./UserView";
import GuestView from "./GuestView";

export default function App() {
  const isLoggedIn = true;
  if (isLoggedIn) return <UserView />;
  else return <GuestView />;
}
