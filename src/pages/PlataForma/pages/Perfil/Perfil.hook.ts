import { faker } from "@faker-js/faker";
import { useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useUser } from "../../../../lib/hooks/useUser";

export const usePerfil = () => {
  const { user } = useUser();
  const scrollRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isAboveMd = useMediaQuery(theme.breakpoints.up("md"));
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [mockFeed, setMockFeed] = useState<any[]>([]);

  useEffect(() => {
    setTimeout(() => {
      const fakeData = Array.from({ length: 10 }).map(() => ({
        idProjeto: faker.number.int({ min: 1 }),
        imagemUrl: faker.image.url(),
        titulo: faker.company.catchPhrase(),
        area: faker.commerce.department(),
        organizacao: faker.company.name(),
        integrantes: faker.number.int({ min: 1, max: 10 }),
        descricao: faker.lorem.paragraph(),
      }));
      setMockFeed(fakeData);
      setLoading(false);
    }, 2000);
  }, []);

  const paddingTop = {
    xs: 4,
    md: 0,
    lg: mockFeed.length > 1 ? 10 : 0,
  };

  const scroll = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return {
    isAboveMd,
    scroll,
    scrollRef,
    loading,
    mockFeed,
    paddingTop,
    user
  };
};
