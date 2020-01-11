import React from "react";

import logo from "../../assets/logo.png";
import { FiMapPin, FiSearch } from "react-icons/fi";
import { Container } from "./styles";

interface IProps {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<IProps> = ({ setCity, setFilter }) => {
  function handleChange(e: any) {
    setCity(e.target.value);
  }

  return (
    <Container>
      <img src={logo} />
      <aside>
        <div>
          <FiSearch />
          <input
            type="text"
            placeholder="O que você procura?"
            onChange={e => setFilter(e.target.value)}
          ></input>
        </div>
        <div>
          <FiMapPin />
          <select defaultValue="São Paulo" onChange={handleChange}>
            <option>São Paulo</option>
            <option>Rio de Janeiro</option>
          </select>
        </div>
      </aside>
    </Container>
  );
};

export default Header;
