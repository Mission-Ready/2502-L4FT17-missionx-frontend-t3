
import ProfileScreen from "./components/ProfileScreen";
import SideBar from "../../../common/SideBar";
import styles from "./StudentProfile.module.css";

const students = [
  {
    name: "Aiden Andrews",
    image: "../public/images/students/AidenAndrews.png",
  },
  {
    name: "Alice Kindellan",
    image: "../public/images/students/AliceKindellan.png",
  },
  {
    name: "Courtney Bristol",
    image: "../public/images/students/CourtneyBristol.png",
  },
  {
    name: "Hanu Nepe",
    image: "../public/images/students/HanuNepe.png",
  },
  {
    name: "Harry Mcgrath",
    image: "../public/images/students/HarryMcgrath.png",
  },
  {
    name: "Javier Fuego",
    image: "../public/images/students/JavierFuego.png",
  },
  {
    name: "Lisa Horan",
    image: "../public/images/students/LisaHoran.png",
  },
  {
    name: "Lucia Mendez",
    image: "../public/images/students/LuciaMendez.png",
  },
  {
    name: "Mark O'Leary",
    image: "../public/images/students/MarkOLeary.png",
  },
  {
    name: "Nagani Cortes",
    image: "../public/images/students/NaganiCortes.png",
  },
  {
    name: "Neveah Machenry",
    image: "../public/images/students/NeveahMachenry.png",
  },
  {
    name: "Rawiri Fletcher",
    image: "../public/images/students/RawiriFletcher.png",
  },
  {
    name: "Shane O'Monahan",
    image: "../public/images/students/ShaneOMonahan.png",
  },
  {
    name: "Simon Laine",
    image: "../public/images/students/SimonLaine.png",
  },
  {
    name: "Tokio Han",
    image: "../public/images/students/TokioHan.png",
  },
];

export default function StudentProfile() {
  return (


    <>
      <div className={styles.Screen}>
        <header>

        </header>
        <ProfileScreen students={students} />
      </div>
    </>

  );
}

