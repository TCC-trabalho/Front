import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";

export const useProjetos = () => {
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [mockFeed, setMockFeed] = useState<any[]>([]);

  useEffect(() => {
    setTimeout(() => {
      const fakeData = Array.from({ length: 10 }).map(() => ({
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

  return {
    loading,
    mockFeed,
    paddingTop,
  };
};
