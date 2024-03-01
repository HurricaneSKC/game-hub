import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../../store/store";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const updateSearchPhrase = useGameQueryStore((s) => s.updateSearchPhrase);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          updateSearchPhrase(ref.current?.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          placeholder="Search games..."
          variant={"filled"}
          ref={ref}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
