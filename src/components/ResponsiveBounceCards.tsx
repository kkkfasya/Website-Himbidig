import BounceCards, {
  type BounceCardsProps,
} from "@/components/BounceCards/BounceCards";
import useIsMobile from "@/hooks/useIsMobile";

export default function ResponsiveBounceCards(props: BounceCardsProps) {
  const { isMobile } = useIsMobile();
  const { images: img } = props;
  const splitIndex = Math.ceil(img?.length! / 2);
  const mobileImages1 = img?.slice(0, splitIndex);
  const mobileImages2 = img?.slice(splitIndex);
  return (
    <div className="debug flex w-full flex-col items-center justify-center">
      {isMobile ? (
        <>
          <div className="mx-auto">
            <BounceCards {...props} images={mobileImages1} />
            <div className="mx-10">
              <BounceCards {...props} images={mobileImages2} />
            </div>
          </div>
        </>
      ) : (
        <BounceCards {...props} />
      )}
    </div>
  );
}
