import usePlatforms from '../components/PlatformSelector/usePlatforms';

const usePlatform = (id?:number) => {
  const { data: platforms } = usePlatforms();
 return platforms?.results.find(
    (p) => p.id === id
  );
}

export default usePlatform