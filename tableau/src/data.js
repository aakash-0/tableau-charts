const data = [
  {
    year: 2014,
    saved: 2487,
    prev: 2487,
    Average: {
      AvgNo: [23, 62, 54],
      labels: ["0-1 puppy", "2-6 adults", "7+ senior"],
      avg: 35,
    },
    proportion: {
        labels:["Gets Along with Dogs","Gets Along with Cats","Gets Along with Kids","Are Housebroken"],
        does:[87,29,58,38],
        not:[1,7,3,6],
        not_sure:[12,64,39,56]
    },
    primary_breed:{
        labels:["Labrador","Pit","Hound","Shepherd","Terrier","American","Catahoula","Hounds","Bll","German"],
        numbers:[1422,838,400,376,306,157,155,150,126,108]
    }
  },
  {
    year: 2015,
    saved: 1036,
    prev: 3525,
    Average: {
      AvgNo: [30, 52, 64],
      labels: ["0-1 puppy", "2-6 adults", "7+ senior"],
      avg: 45,
    },
    proportion: {
        labels:["Gets Along with Dogs","Gets Along with Cats","Gets Along with Kids","Are Housebroken"],
        does:[87,29,58,38],
        not:[1,7,3,6],
        not_sure:[12,64,39,56]
    },
    primary_breed:{
        labels:["Labrador","Pit","Hound","Shepherd","Terrier","American","Catahoula","Hounds","Bll","German"],
        numbers:[297,154,87,100,70,47,26,28,17,16]
    }
  },
  {
    year: 2016,
    saved: 1199,
    prev: 4724,
    Average: {
      AvgNo: [33, 52, 64],
      labels: ["0-1 puppy", "2-6 adults", "7+ senior"],
      avg: 44,
    },
    proportion: {
        labels:["Gets Along with Dogs","Gets Along with Cats","Gets Along with Kids","Are Housebroken"],
        does:[87,29,58,38],
        not:[1,7,3,6],
        not_sure:[12,64,39,56]
    },
    primary_breed:{
        labels:["Labrador","Pit","Hound","Shepherd","Terrier","American","Catahoula","Hounds","Bll","German"],
        numbers:[297,154,87,100,70,47,26,28,17,16]
    }
  },
  {
    year: 2017,
    saved: 1246,
    prev: 5970,
    Average: {
      AvgNo: [23, 62, 54],
      labels: ["0-1 puppy", "2-6 adults", "7+ senior"],
      avg: 35,
    },
    proportion: {
        labels:["Gets Along with Dogs","Gets Along with Cats","Gets Along with Kids","Are Housebroken"],
        does:[74,22,47,46],
        not:[1,3,3,2],
        not_sure:[25,75,50,52]
    },
    primary_breed:{
        labels:["Labrador","Pit","Hound","Shepherd","Terrier","American","Catahoula","Hounds","Bll","German"],
        numbers:[1422,838,400,376,306,157,155,150,126,108]
    }
  },
  {
    year: 2018,
    saved: 1275,
    prev: 7245,
    Average: {
      AvgNo: [34, 91, 130],
      labels: ["0-1 puppy", "2-6 adults", "7+ senior"],
      avg: 51,
    },
    proportion: {
        labels:["Gets Along with Dogs","Gets Along with Cats","Gets Along with Kids","Are Housebroken"],
        does:[89,28,56,41],
        not:[1,6,4,11],
        not_sure:[10,66,40,48]
    },
    primary_breed:{
        labels:["Labrador","Pit","Hound","Shepherd","Terrier","American","Catahoula","Hounds","Bll","German"],
        numbers:[295,211,87,66,90,31,43,22,21,20]
    }
  },
  {
    year: 2019,
    saved: 1295,
    prev: 8540,
    Average: {
      AvgNo: [32, 118, 145],
      labels: ["0-1 puppy", "2-6 adults", "7+ senior"],
      avg: 54,
    },
    proportion: {
        labels:["Gets Along with Dogs","Gets Along with Cats","Gets Along with Kids","Are Housebroken"],
        does:[88,30,64,35],
        not:[1,8,3,5],
        not_sure:[11,62,33,60]
    },
    primary_breed:{
        labels:["Labrador","Pit","Hound","Shepherd","Terrier","American","Catahoula","Hounds","Bll","German"],
        numbers:[320,181,104,95,65,26,26,30,22,18]
    }
  },
  {
    year: 2020,
    saved: 1115,
    prev: 9655,
    Average: {
      AvgNo: [28, 70, 68],
      labels: ["0-1 puppy", "2-6 adults", "7+ senior"],
      avg: 39,
    },
    proportion: {
        labels:["Gets Along with Dogs","Gets Along with Cats","Gets Along with Kids","Are Housebroken"],
        does:[90,30,60,31],
        not:[1,7,3,5],
        not_sure:[9,63,37,64]
    },
    primary_breed:{
        labels:["Labrador","Pit","Hound","Shepherd","Terrier","American","Catahoula","Hounds","Bll","German"],
        numbers:[244,146,68,47,47,67,26,38,24,23]
    }
  },
  {
    year: 2021,
    saved: 921,
    prev: 10576,
    Average: {
      AvgNo: [32, 68, 95],
      labels: ["0-1 puppy", "2-6 adults", "7+ senior"],
      avg: 41,
    },
    proportion: {
        labels:["Gets Along with Dogs","Gets Along with Cats","Gets Along with Kids","Are Housebroken"],
        does:[95,36,63,34],
        not:[1,8,2,4],
        not_sure:[4,56,35,62]
    },
    primary_breed:{
        labels:["Labrador","Pit","Hound","Shepherd","Terrier","American","Catahoula","Hounds","Bll","German"],
        numbers:[184,124,35,40,25,34,73,21,41,50]
    }
  },{
    year: 2022,
    saved: 301,
    prev: 10877,
    Average: {
      AvgNo: [35, 100, 244],
      labels: ["0-1 puppy", "2-6 adults", "7+ senior"],
      avg: 57,
    },
    proportion: {
        labels:["Gets Along with Dogs","Gets Along with Cats","Gets Along with Kids","Are Housebroken"],
        does:[96,34,62,45],
        not:[1,10,4,11],
        not_sure:[3,56,34,44]
    },
    primary_breed:{
        labels:["Labrador","Pit","Hound","Shepherd","Terrier","American","Catahoula","Hounds","Bll","German"],
        numbers:[82,22,19,28,9,24,13,26,8,10]
    }
  }
];

export default data;

// labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//   datasets: [
//     {
//       label: "First dataset",
//       data: [33, 53, 85, 41, 44, 65],
//       fill: true,
//       backgroundColor: "rgba(75,192,192,0.2)",
//       borderColor: "rgba(75,192,192,1)",
//     },
//   ],
