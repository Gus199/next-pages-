import Link from "next/link";
import classes from "./main-header.module.css";
import Avatar from "@mui/material/Avatar";

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">NextEvents</Link>
        <Avatar alt="Remy Sharp" src="/amar.png" className={classes.avatar} />
        
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/events">Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
