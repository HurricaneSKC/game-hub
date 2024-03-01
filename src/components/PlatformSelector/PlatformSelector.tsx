import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "./usePlatforms";
import usePlatform from "../../hooks/usePlatform";
import useGameQueryStore from "../../store/store";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const { gameQuery, updatePlatformId } = useGameQueryStore();
  const selectedPlatform = usePlatform(gameQuery.platformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform: Platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => updatePlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
