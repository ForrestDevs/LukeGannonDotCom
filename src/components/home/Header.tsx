"use client";

import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import { ThemeToggle } from "@/components/standard/ThemeToggle";
import { Container } from "@/components/standard/Container";
import Avatar from "../standard/Avatar";

const navigations = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/snippets", label: "Snippets" },
  { href: "/resources", label: "Resources" },
];

function clamp(value: number, a: number, b: number): number {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  return Math.min(Math.max(value, min), max);
}

function AvatarContainer({
  className,
  ...props
}: {
  className?: string;
  [key: string]: any;
}): JSX.Element {
  return (
    <div
      className={clsx(
        className,
        "h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"
      )}
      {...props}
    />
  );
}

export default function Header(): JSX.Element {
  let isHomePage = usePathname() === "/";

  let headerRef = useRef();
  let avatarRef = useRef();
  let isInitial = useRef(true);

  useEffect(() => {
    let downDelay = (avatarRef.current as any)?.offsetTop ?? 0;
    let upDelay = 64;

    function setProperty({ property, value }: { [key: string]: any }): void {
      document.documentElement.style.setProperty(property, value);
    }

    function updateHeaderStyles(): void {
      let { top, height } = (headerRef.current as any).getBoundingClientRect();
      let scrollY = clamp(
        window.scrollY,
        0,
        document.body.scrollHeight - window.innerHeight
      );

      if (isInitial.current) {
        setProperty({ property: "--header-position", value: "sticky" });
      }

      setProperty({ property: "--content-offset", value: `${downDelay}px` });

      if (isInitial.current || scrollY < downDelay) {
        setProperty({
          property: "--header-height",
          value: `${downDelay + height}px`,
        });
        setProperty({ property: "--header-mb", value: `${-downDelay}px` });
      } else if (top + height < -upDelay) {
        let offset = Math.max(height, scrollY - upDelay);
        setProperty({ property: "--header-height", value: `${offset}px` });
        setProperty({ property: "--header-mb", value: `${height - offset}px` });
      } else if (top === 0) {
        setProperty({
          property: "--header-height",
          value: `${scrollY + height}px`,
        });
        setProperty({ property: "--header-mb", value: `${-scrollY}px` });
      }
    }

    function updateAvatarStyles(): void {
      if (!isHomePage) {
        return;
      }

      let fromScale = 1;
      let toScale = 36 / 64;
      let fromX = 0;
      let toX = 2 / 16;

      let scrollY = downDelay - window.scrollY;

      let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale;
      scale = clamp(scale, fromScale, toScale);

      let x = (scrollY * (fromX - toX)) / downDelay + toX;
      x = clamp(x, fromX, toX);

      setProperty({
        property: "--avatar-image-transform",
        value: `translate3d(${x}rem, 0, 0) scale(${scale})`,
      });

      let borderScale = 1 / (toScale / scale);
      let borderX = (-toX + x) * borderScale;
      let borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`;

      setProperty({
        property: "--avatar-border-transform",
        value: borderTransform,
      });
      setProperty({
        property: "--avatar-border-opacity",
        value: scale === toScale ? 1 : 0,
      });
    }

    function updateStyles(): void {
      updateHeaderStyles();
      updateAvatarStyles();
      isInitial.current = false;
    }

    updateStyles();
    window.addEventListener("scroll", updateStyles, { passive: true });
    window.addEventListener("resize", updateStyles);

    return () => {
      (window as any).removeEventListener("scroll", updateStyles, {
        passive: true,
      });
      window.removeEventListener("resize", updateStyles);
    };
  }, [isHomePage]);

  return (
    <>
      <header
        className="pointer-events-none relative z-50 flex flex-col"
        style={{
          height: "var(--header-height)",
          marginBottom: "var(--header-mb)",
        }}
      >
        {isHomePage && (
          <>
            <div
              ref={avatarRef as any}
              className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"
            />
            <Container
              className="top-0 order-last -mb-3 pt-3"
              style={{ position: "var(--header-position)" }}
            >
              <div className="relative">
                <AvatarContainer
                  className="absolute left-0 top-3 origin-left transition-opacity"
                  style={{
                    opacity: "var(--avatar-border-opacity, 0)",
                    transform: "var(--avatar-border-transform)",
                  }}
                />
                <Avatar
                  large
                  className="block h-16 w-16 origin-left"
                  style={{ transform: "var(--avatar-image-transform)" }}
                />
              </div>
            </Container>
          </>
        )}
        <div
          ref={headerRef as any}
          className="top-0 z-10 pt-6"
          style={{
            position: "var(--header-position)" as any,
          }}
        >
          <Container>
            <div className="relative flex gap-4">
              <div className="flex flex-1">
                {!isHomePage && (
                  <AvatarContainer>
                    <Avatar />
                  </AvatarContainer>
                )}
              </div>
              <div className="flex flex-1 justify-end md:justify-center">
                <MobileNavigation
                  links={navigations}
                  className="pointer-events-auto md:hidden"
                />
                <DesktopNavigation
                  links={navigations}
                  className="pointer-events-auto hidden md:block"
                />
              </div>
              <div className="flex justify-end md:flex-1">
                <div className="pointer-events-auto">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
      {isHomePage && <div style={{ height: "var(--content-offset)" }} />}
    </>
  );
}

// export default function HeaderOld() {
//   let { scrollY } = useScroll();
// //   let o = useTransform(scrollYProgress, [0, 1], [0, 1]);

//   const [bgClass, setBgClass] = useState("");

//   useMotionValueEvent(scrollY, "change", (latest) => {
//     if (latest > 200) {
//       setBgClass("bg-opacity-40 backdrop-filter backdrop-blur-sm");
//     } else {
//       setBgClass("bg-black bg-opacity-0");
//     }
//   });

//   return (
//     <motion.header
//     //   style={{ backgroundColor: o }}
//       className={`fixed top-0 left-0 px-10 w-full flex justify-between p-5 text-white z-50 bg-black bg-opacity-0 ${bgClass}`}
//     >
//       <div className="font-bold text-xl">Luke Gannon</div>
//       <nav>
//         <ul className="flex space-x-4">
//           <li>
//             <a href="#about">About</a>
//           </li>
//           <li>
//             <a href="#projects">Projects</a>
//           </li>
//           <li>
//             <a href="/blog">Blog</a>
//           </li>
//         </ul>
//       </nav>
//     </motion.header>
//   );
// }
