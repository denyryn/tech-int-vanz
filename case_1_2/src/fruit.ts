type IFruit = {
  fruitId: number;
  fruitName: string;
  fruitType: "IMPORT" | "LOCAL" | "INTERNATIONAL" | "NATIONAL";
  stock: number;
};

const fruits: IFruit[] = [
  {
    fruitId: 1,
    fruitName: "Apel",
    fruitType: "IMPORT",
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: "Kurma",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 3,
    fruitName: "apel",
    fruitType: "IMPORT",
    stock: 50,
  },
  {
    fruitId: 4,
    fruitName: "Manggis",
    fruitType: "LOCAL",
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: "Jeruk Bali",
    fruitType: "LOCAL",
    stock: 10,
  },
  {
    fruitId: 5,
    fruitName: "KURMA",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 5,
    fruitName: "Salak",
    fruitType: "LOCAL",
    stock: 150,
  },
  {
    fruitId: 8,
    fruitName: "Strawberry",
    fruitType: "INTERNATIONAL",
    stock: 150,
  },
  {
    fruitId: 12,
    fruitName: "Kelengkeng",
    fruitType: "NATIONAL",
    stock: 150,
  },
];

const toCapitalized = (str: string) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// Nomor 1
console.log("\n====== 1 ======");

const getNormalizedFruits = (fruits: IFruit[]): IFruit[] => {
  const grouped: Record<string, IFruit> = {};
  const result: IFruit[] = [];

  for (const item of fruits) {
    const normalizedName = item.fruitName.toLowerCase();

    if (!grouped[normalizedName]) {
      grouped[normalizedName] = {
        fruitId: item.fruitId,
        fruitName: normalizedName,
        fruitType: item.fruitType,
        stock: item.stock,
      };
    } else {
      grouped[normalizedName].stock += item.stock;
    }
  }

  for (const key in grouped) {
    if (grouped.hasOwnProperty(key)) {
      result.push(grouped[key]);
    }
  }

  return result;
};

const normalizedFruits = getNormalizedFruits(fruits);

console.log(
  "Buah yang dimiliki Andi : " +
    normalizedFruits.map((fruit) => toCapitalized(fruit.fruitName)).join(", ")
);

// Nomor 2
console.log("\n====== 2 ======");

const separateContainers = (fruits: IFruit[]): Record<string, IFruit[]> => {
  const uniqueContainers: Record<string, IFruit[]> = {};
  for (const item of fruits) {
    uniqueContainers[item.fruitType] = uniqueContainers[item.fruitType] || [];
    uniqueContainers[item.fruitType].push(item);
  }
  return uniqueContainers;
};

const containers = separateContainers(normalizedFruits);

console.log(
  "Jumlah wadah yang digunakan : " +
    Object.keys(separateContainers(normalizedFruits)).length +
    " Terdiri dari " +
    Object.keys(separateContainers(normalizedFruits)).join(", ")
);

const getContainerFruits = (
  container: Record<string, IFruit[]>
): Record<string, string> => {
  const containerFruits: Record<string, string> = {};
  for (const key in container) {
    containerFruits[key] = container[key]
      .map((fruit) => fruit.fruitName)
      .join(", ");
  }
  return containerFruits;
};

console.log("Buah yang ada di masing-masing wadah : ");

for (const key in getContainerFruits(containers)) {
  console.log(
    key +
      " : " +
      getContainerFruits(containers)
        [key].split(", ")
        .map((fruit) => toCapitalized(fruit))
        .join(", ")
  );
}

// Nomor 3
console.log("\n====== 3 ======");

const getContainerTotalStock = (container: IFruit[]) => {
  let total = 0;
  for (const fruit of container) {
    total += fruit.stock;
  }
  return total;
};

console.log("Total stock buah di masing-masing container : ");

console.log(
  "Total stock buah di container LOCAL : " +
    getContainerTotalStock(containers.LOCAL)
);

console.log(
  "Total stock buah di container IMPORT : " +
    getContainerTotalStock(containers.IMPORT)
);
