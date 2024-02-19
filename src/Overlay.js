import { Logo } from "@pmndrs/branding";
import {
  AiOutlineHighlight,
  AiOutlineShopping,
  AiFillCamera,
  AiOutlineArrowLeft,
} from "react-icons/ai";

import { useSnapshot } from "valtio";
import { state } from "./store";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { Box, Button, Center, Heading, Icon, Text } from "@chakra-ui/react";

const animatePresence = {
  initial: { x: -100, opacity: 0, transition: { delay: 0.5 } },
  animate: { x: 0, opacity: 1, transition: { delay: 0 } },
  exit: { x: -100, opacity: 0, transition: { delay: 0 } },
};

export default function Overlay() {
  const snap = useSnapshot(state);

  return (
    <div className='container'>
      <header>
        <Logo width='40' height='40' />
      </header>

      <AnimatePresence>
        {snap.intro === true ? (
          <Intro animate={animatePresence} />
        ) : (
          <Customizer animate={animatePresence} />
        )}
      </AnimatePresence>
    </div>
  );
}

function Intro({ animate }) {
  // const snap = useSnapshot(state);
  const handleCustomize = () => {
    state.intro = false;
  };
  return (
    <motion.section key='main' {...animate}>
      <Heading
        fontStyle='italic'
        letterSpacing='-8px'
        fontSize={{ md: "12vw", base: "56px" }}
        filter='drop-shadow(2px 2px 4px magenta)'
        pos='fixed'
        top='20%'
        left='10%'
        lineHeight={{ md: "10vw", base: "40px" }}
      >
        LET'S <br /> DO <br /> IT.
      </Heading>

      <Box
        bgColor='rgba(255,255,255,.1)'
        pos='fixed'
        bottom='25%'
        left='50%'
        transform='translateX(-50%)'
        px='16px'
        py='8px'
        pb='16px'
        borderRadius='5px'
        backdropFilter='blur(15px)'
        fontSize='20px'
      >
        <Text w={{ base: "300px", md: "400px" }} mb='16px'>
          Create your unique and exclusive shirt with our brand-new 3D
          customization tool. <strong>Unleash your imagination</strong> and
          define your own style.
        </Text>
        <Center>
          <Button
            bgColor='magenta'
            onClick={handleCustomize}
            fontWeight='bold'
            letterSpacing='wider'
            color='white'
            _hover={{
              bgColor: "black",
            }}
          >
            CUSTOMIZE
          </Button>
        </Center>
      </Box>
    </motion.section>
  );
}

function Customizer({ animate }) {
  const snap = useSnapshot(state);
  const handleBack = () => {
    state.intro = true;
  };

  const handleColor = (color) => {
    state.selectedColor = color;
  };

  const handleDecal = (decal) => {
    state.seletedDecal = decal;
  };

  const colors = [
    "#ccc",
    "#EFBD4E",
    "#80C670",
    "#726DE8",
    "#EF674E",
    "#353934",
    "Purple",
  ];
  const decals = ["react", "three2", "pmndrs"];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.setAttribute("download", "canvas.png");
    link.setAttribute(
      "href",
      document
        .querySelector("canvas")
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream")
    );
    link.click();
  };

  return (
    <motion.section key='custom' {...animate}>
      <div className='customizer'>
        <div className='color-options'>
          {colors.map((color) => (
            <div
              key={color}
              className='circle'
              style={{ background: color }}
              onClick={() => handleColor(color)}
            />
          ))}
        </div>
        <div className='decals'>
          <div className='decals--container'>
            {decals.map((decal) => (
              <div
                key={decal}
                className='decal'
                onClick={() => handleDecal(decal)}
              >
                <img src={decal + "_thumb.png"} alt='brand' />
              </div>
            ))}
          </div>
        </div>
        <Button
          bgColor='magenta'
          onClick={handleDownload}
          fontWeight='bold'
          letterSpacing='wider'
          color='white'
          _hover={{
            bgColor: "black",
          }}
          pos='fixed'
          bottom='5%'
          right='10%'
        >
          DOWNLOAD <Icon as={AiFillCamera} mt='2px' ml='4px' />
        </Button>

        <Button
          bgColor='magenta'
          onClick={handleBack}
          fontWeight='bold'
          letterSpacing='wider'
          color='white'
          _hover={{
            bgColor: "black",
          }}
          pos='fixed'
          top='5%'
          right='10%'
        >
          GO BACK{" "}
          <Icon as={AiOutlineArrowLeft} ml='4px' mt='2px' boxSize='1.3em' />
        </Button>
      </div>
    </motion.section>
  );
}
