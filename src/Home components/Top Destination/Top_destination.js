import React from "react";
import "./Top_destination.css";
import TopdestinationTile from "./Top_destinationTile";
import Slider from "react-slick";

export default function Top_destination() {
  const width = window.innerWidth;
  const cities = [
    {
      coordinates: {
        latitude: "16.0544",
        longitude: "108.2022",
      },
      _id: "5ef5d083db65dc0017ca6929",
      cityName: "Da Nang",
      countryName: "Vietnam",
      aboutCity:
        "Da Nang is a coastal city in central Vietnam known for its sandy beaches and history as a French colonial port. It's a popular base for visiting the inland Bà Nà hills to the west of the city. Here the hillside Hải Vân Pass has views of Da Nang Bay and the Marble Mountains. These 5 limestone outcrops are topped with pagodas and hide caves containing Buddhist shrines.",
      idealDays: "3-4 days",
      imageUrl:
        "https://images.pexels.com/photos/2582757/pexels-photo-2582757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      weather: "26 - 33 C",
      travelDuration: "8-10 hours",
      famousPlacesToVisit:
        "The Marble Mountains, GOlden Bridge,Dragon Bridge, The world cultural heritage My Son, Linh Ung pagoda, My Khe Beach, Asia Park - Sun World Da Nang Wonders, Đà Nẵng Museum of Cham Sculpture,.",
      __v: 0,
      airportName: "Da Nang International Airport ( DAD )",
      airportType: "Native Airport",
      createdAt: "2020-09-17T06:11:21.372Z",
      updatedAt: "2020-09-17T06:11:21.372Z",
    },
    {
      coordinates: {
        latitude: "27.4712",
        longitude: "89.6339",
      },
      _id: "5ef5db91db65dc0017ca692c",
      cityName: "Thimphu",
      countryName: "Bhutan",
      aboutCity:
        "Thimphu, Bhutan’s capital, occupies a valley in the country’s western interior. In addition to being the government seat, the city is known for its Buddhist sites.",
      idealDays: "3-4 days",
      imageUrl:
        "https://lp-cms-production.imgix.net/2019-06/920de4c69eb8dc956b6687b1e78ae804-trashi-chhoe-dzong.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4",
      weather: "26 C",
      travelDuration: "8-10 hours",
      famousPlacesToVisit:
        "1. Trashi Chho Dzong 2. Changangkha Lhakhang 3. Tango Goemba 4. National Memorial Chorten 4. Motithang Takin Preserve 5. Dechen Phodrang",
      __v: 0,
      airportName: "Bagdogra International Airport",
      airportType: "Nearest Airport",
    },
    {
      coordinates: {
        latitude: "27.4287",
        longitude: "89.4164",
      },
      _id: "5ef5e625db65dc0017ca692e",
      cityName: "Paro",
      countryName: "Bhutan",
      aboutCity:
        "1. Paro is a valley town in Bhutan, west of the capital\n2. It is the site of the country’s only international airport and is also known for the many sacred sites in the area.",
      idealDays: "3-4 days",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/6/68/Paro%2C_Paro%2C_Bhutan_%288026008882%29.jpg",
      weather: "- 2 C - 23 C",
      travelDuration: "6-8 hours",
      famousPlacesToVisit:
        "1. Taktsang Lhakhang or the Tiger’s Nest 2. Chele La pass 3. Rinchen Pung Dzong 4. Drukgyel Dzong 5. Druk Choeding temple 6. National Museum",
      __v: 0,
      airportName: "Paro International Airport ",
      airportType: "Native Airport",
    },
    {
      coordinates: {
        latitude: "11.5564",
        longitude: "104.9282",
      },
      _id: "5ef5ed3adb65dc0017ca6932",
      cityName: "Phnom Penh",
      countryName: "Cambodia",
      aboutCity:
        "Phnom Penh, Cambodia’s busy capital, sits at the junction of the Mekong and Tonlé Sap rivers. It was a hub for both the Khmer Empire and French colonialists. On its walkable riverfront, lined with parks, restaurants and bars, are the ornate Royal Palace, Silver Pagoda and the National Museum, displaying artifacts from around the country. At the city’s heart is the massive, art deco Central Market.",
      idealDays: "3-4 days",
      imageUrl:
        "https://images.pexels.com/photos/3226403/pexels-photo-3226403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      weather: "26 - 34 C",
      travelDuration: "8-10 hours",
      famousPlacesToVisit:
        "Royal Palace, Wat Phnom, Central Market, Tuol Sleng Genocide Museum, National Museum of Cambodia, Independence Monument.",
      __v: 0,
      airportName: "Phnom Penh International (PNH) Airport",
      airportType: "Native Airport",
      createdAt: "2020-10-27T06:09:37.314Z",
      updatedAt: "2020-11-03T09:30:10.333Z",
    },
    {
      coordinates: {
        latitude: "27.7172",
        longitude: "85.3240",
      },
      _id: "5ef5edcfdb65dc0017ca6933",
      cityName: "Kathmandu",
      countryName: "Nepal",
      aboutCity:
        "1. Kathmandu, Nepal's capital, is set in a valley surrounded by the Himalayan mountains. \n2. At the heart of the old city’s mazelike alleys is Durbar Square, which becomes frenetic during Indra Jatra, a religious festival featuring masked dances",
      idealDays: "3-4 days",
      imageUrl:
        "https://images.pexels.com/photos/4385529/pexels-photo-4385529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      weather: "20 C - 30 C",
      travelDuration: "6-8 hours",
      famousPlacesToVisit:
        "1. Tabitha Bahal 2. Boudhanath Stupa 3. Swayambhunath temple 4. Kathmandu Durbar Square 5. Pashupati temple",
      __v: 0,
      airportName: "Tribhuvan International Airport",
      airportType: "Native Airport",
      createdAt: "2020-11-03T09:29:21.354Z",
      updatedAt: "2020-11-03T09:29:21.621Z",
    },
    {
      coordinates: {
        latitude: "10.7582",
        longitude: "103.8216",
      },
      _id: "5ef5ee77db65dc0017ca6934",
      cityName: " Sihanoukville",
      countryName: "Cambodia",
      aboutCity:
        "Sihanoukville, also known as Kampong Som, is a coastal city in Cambodia and the capital of Sihanoukville Province, at the tip of an elevated peninsula in the country's south-west on the Gulf of Thailand. ",
      idealDays: "3-4 days",
      imageUrl:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFRUXFx8YGRcYGBsaHhgYFxkdFxgbGh0ZHSggHhslHh0eIjEhJSkrLi4uHSAzODMtNygtLisBCgoKDg0OGxAQGy0mHyUuLS0tMC0tLS0tLy0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKwBJQMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBQIDBgEABwj/xABDEAACAQIEBAMFBAgFAgcBAAABAhEDIQAEEjEFIkFRE2FxBjKBkfAjQqGxFFJicsHR4fEVM4KSolOyQ1Rjc8LS0wf/xAAaAQACAwEBAAAAAAAAAAAAAAABAgADBAUG/8QALxEAAgIBAwMCBQMEAwAAAAAAAAECEQMSITEEE0EiUTJhcYHwBSORM6Gx4RVC0f/aAAwDAQACEQMRAD8A0gqixWVUd5vF++IV6oaexnt8/wCOEWcz7QulQSDGnpGw/DDrh/F8pTprqQs5DHTp1E6ZkjVyiwmARi+DadMxpWU5XO1EMapA5T22xbT4iaVQH70yIvYem83wJm+NLWBRaegMQ6s7KtjuI7iY37dsUVXUJD1FGnqIkjyM/XwwcnHzQEj6PxBAyq67MoNh37fPCPMIR/M/2w19mOIU8xSFMESiKQOb3COUnV1mxjHM9k47Gdj3xb0+ZVRm6rp/+y4ETMZ6SMVmqdr/ACnBmYo9vr8MLa6Ef2xtjJM5k8dFgrdiPT+eO+L5GO/Q/wA8AtVPe3Yi2OBvT5fyxbRmlsH+Keu3kD/HETVjaSPz+WAi3p6wI+ZFsRNQYNC2HeL8PL+m+INW9MB6/l9b4P8A8MZls6l4U+GTpJ1glQpNmaxtiNxjyPCEp/Cio1seFX6mf7YCqsQSCCCLEHeexnEPFw1CDDxvPHvGwv8AGx7xsSiBxrfX1fHDW+r4B8bHPHGDQQ7xcdFT44ANbzx0VcSiB3i454owL4n1bHvGxKJYQavn9fPEfFxSlUE3JjrEfkcQ1GCR037XwB1wEGrjnjfX9xgXxJ+v5HHCxvuQPwwQoL8UfRxzxMCFj9DHC5xCBZqY4auBNeOa8AIWauOeJgQ1Mc8XEJQX4mOF8CGrj3iYgaCdePYF8THsQlDHNe0eXljTpHSJpk6UTS4m9z1272GFPs7xv7cJXcaWVrkaeZAWknoCoP4dsA5wVKsCpUpqJkimpAN45pJ2I79cDvkYIKuNSXM3B3sB2O1++OFOSTTZ6Vcmvz/HMkIFNRUaNcLTnUgJUwWAB+B3GM9XzFOpVfRyidUGLA9LSImbdBgfN8QaNNKnSpWgFVus9B93/j1+OFuQyugiSAGBue6+W/lgzkoqyNWbT2P4gyZ1FFUsKltKmxsSNU9PIdYx9Wq0w6kfQx8HyDCn9qWg0zqQLYkg2+ut8fU/Yj2gbNKzEyLN0BXUJ0kTMdj1ne2KHUZUiyCuNM7XplWKnp5/0wDXoz/L+uNPxGlrkgcwiwuSPTp64RVBvEW+EY6GLJqVnLz4u26EGaoxJi/cn+eB6FJnOkAH4jbzPTDurQkjUYBNzgejmgtSaa5U0tpFamKhUddUx3On8caHm0qvJmx9GsrtukBnIVJgdP20/wDt+OOfoLiSxRABJZnXSB3Nz+WHHEXy5ACU6FS19TUYH+49fLCpzSI0t4SPNlDLUmAbwpMGAe3riqXVZK2S/k0f8ZhT5f59gKnReoSKZVwPv6pXyi1/QTjQUOG1NRZ2FypAAsGQrFyRblHTCteJGlpVBMknmEEGFB5EBI+JP44qz/EKjOqF2ErOhZWbAzABqkdLADzxFOeRXJ/wWY+lxYrpX9SftA4NRIIaKYGoHVqAJ0knqdMX64VlvqccrATygAdQNO/oCb+rE+lsVFsbsSqKON1X9aRNmxE1MRpoWIVAWY2AAkn0gYPT2ezJYBqTop3eNQUdyEkn0/LBnkhD4nQmPFPJ8KbAPEx4vg6pwVSStLM0nIMaX1UWnsA4IPzGB6vBcwpg0j6gqR8wYwsM+OfEkXS6XLHmL/z/AIBxUx0N64HzKtTbS40t2tf0jfDX2dzmhlglSzxNxAVdQB/ZZoU9CJwcmRRVkx4XOWlgBqfX0Md8XB/tDlFXRVQaRUkMgEBagCs2j9g6hA6GR0wmL4aE1NWgTxuEtLCxW+rY8Mx54jw3JvXqCnTjUdpIAt5nDXL+yWcZyhpaAN2Zhp+EEk/AYWWSEdpMaGGc94xbI8JpK5Z6h+ypjU8bmfdUdZP8D5Y0OX9oHTQiKqjxUp6ABHNLOPgCi26k4upex7LRFPxQT4niNy2YgAKu86RHzOFGT9nsz4tFaiC1cu5BEQdBkX5vd6XHbGOeTHku2dHHhy4klFbvn8/PIH7U00p5qqqABZBA6DUoYgfE4Umrgn2orzm65/8AUI/2gKPwGFZbGvH8Cv2Rzs1dyVe7Cdf1bHteBFfHmrfD54co1hBqY94mAzV88eFTEoimGa/L8Me8TAmr4fPBGXqqPeQt/r0j/tJn44DdDp26JGp6Y9jvj0f1XH+oH/4jHsDV8h6+YDlMwQWlQQbTBvEyLnvH4YU8Sy7BtaiNS/AaQAd7RhnSptTaWeiUg/eJE7xI6mLCfhtitjVqk/Z+IskBgDtNoI2x56eVraj0qQE0DSyvqvuZGv8AdUT9HFRylSpUUpT1FI3Yfctvqv6HDZODGQ0CnB20lzIA2KAkDr88QXNCm7TpLgyVFMyuxvLXMHYRscLryaeLQaR1MnVUa9K+ex3mRab7413sDmX8bmBRQpVjpIJC+6oMAftW3tjN087qkhGk80GQOlyAfW5GGaVdQRiZAYckkawsWkbNPzjCTdxjJ8hjVn2Cg6zqEGR71th3OFHFsiCwqJcMJsN/ORidHPoQkNoJIhC4GrqQAJk+nngnK5ik7OtNgHUjUh2BmSYI38x2GL8eRwdombFHLGmZXiZZVEEKNQkkNsWG0Msf7hO0zut4xU0mYciBAK1GNtt8s5J9SfXGy9q6NMUZJUPqBEsATFmiSOkmxHXzBw2cejTc6lpyRsWpoQGvsWpH5r0xpUtbszRx9paRb+lmRqpgDpqgbfvZEYnVqESV2ENykxIYET4dKksfvPHkcSNVCrPTKpCmIqI26MJkZv0PT1G4HrlTUYEqTLEXQmf2RqqNbblQ4kbToZrYuzJChRqlTLAsEAMxEaWppETaGxAEaQbaR+6FkRExppz+8znyxUEuTJmb6SQwk9btUj1ZB5bgVvWMkQ0hTzQ9u3NqLQR+2g3mMWxq6EdhLVJAN9tjqtfpqC8vaEUdp6UscCcMzqOWRGDRc6Y0gnoSg06j+85N+a2DGt3x0MT9JwetVZn9g7gOYZKsrBJUrfULEcxBSWUgCdQBjc2kjQez/GloyzNXNIi6mMyqEbkVKZ1DrYr8uuYyVSJPx6dAY95lHnOpfUb4taswIaoIMiPEHMf3f0gI3+2u3ljn9V/UaOt+nusKf1Ndn87TzM8tCoL3VwHUdJD6W+ER64y+azAWabVFCbgNVUCAL8oM2tssRGGD1FMM1iR9+P8Aj46kxb7rkYzuYrQzBAsyLqbiUAP+TSJjlXt67DFEcGOe7RrcmzU8Ez2WNEqpHiQCNINwVB3gSCTb4YGq8ZSdK+I7RsuuDHcxAnCrI1qiuSuowNvtoaOUEhSQfiBgf9I5jrXYRzkCepMVKs9P1cX44xWwHJlnH88amgFWBAJIZpMtE7mYtuQJ+GE5wXxJwQhAABmw2+EKB8p9dsBTjoYq07HF6pvuu/zYceyroMyuuotMQYZiAuq0AnpOPpWZypWjFIw1OGSXM6W5mk35b26WGPj9Knq1CA1hykxMuogGfeiY/I7HY8I/SqCDQHaixINB7soZfuRdTabR1JWcc/q2+6jpdA6xV8yfGf8A+oU6aMKNMtVVmQmpAUFCVLcpMywNrW7bYlmuN1XZa7OUoqdSzbVpW4pj753vsOpG2E3Faa0GBo5bLUDLHxq3MwvKlBUk6ovARiNumBMgTUY1C9SoxEfpFS0weZaIO0Lq5ieWxhMCEFVls8rugHO5hnqO5EFmZiDcgkkwT1xRqxVVbmMC0n88eB+o/rjprg4Mt22W68eJxTMY4WwGwJFhfzx7VinVj2vEsKgEa8eD4oDY7OBYaLdePYp1eePYlkoY8S/RKrQ1VrkMqA1CBpiCuoMeu89cI+I5gUGhNQ0yFHq3U77ThrxL2TzJq0y+Zp6irBRp+7Yn3UAsSLwMKc77O1TmXUMlQkiwkmQo2BvNu3fHCm9t+D01bjnhHEEqUWarSLT9nqKBzKrqaGIlbHcQfPbEKT0GDmhTIcCJMCSvLp97e0bdsRynA8/SQ6YVBzGakLpsWMA+9AO47dhhfxLIPlU1Ry1BbSwkMRzN3No+PrgRnKOyRGgfh9SpAbU8lIM9beUWxp+EOQikjTp2He5M38zjJZJGUA7gqt+7G/UCAL40FVdIBZzaLSb9wTivNSxfVi72a/hz0801QMftFIPLcoGHcmwneAY9cOsvlSzK7VVSqhgmSSw1e7EgQfdPmDj5FmuIGk5rUiUYAyykmxtJG0eox9V4Lx6jmKSHUhBCydXNJAPumSJ7R8sLBuSLoyXkQZ7MNVc1m0/pBhgDdQt4SFOoj9oddRk7LChnnaqKcVKJ8OROs0yQd0elWVCItARTa+2Kc5llFWpULAJ4jRLBjIIB32G3vWgiZEIaKzTUpvMAalEkDUTH6xEx5FjbYY6MIRtGKWRxTfI24lXZaZdn1RAhDUNiQJC62JMx6CcI8xxWajqqVnPiOulEquCNRWSA6qfOZ9MMUrkD3o89UfiKi/8AcPXAefrgFRqEa2MF1iS7E2Oa8/1Ph2ty41CWxX0+fuRtiejUruKgY+CqtqChKbwFJ1LBK0gTy81og9zi7wUdBqY1QrEfaFSqzBkrRfTAieZx7xnoMErUjkHmABIjcSACIE9VRR54hTqhpvIn9aSOUN+u5H/H12OK/JovbYvyVYHlGwFgIVQJ+6AFWL7qp/eOLyQMAZGoZPmPnBF7b+up/UYvasO+OjgXpOB+ov8Ad+ww4bUIZiIiIm86rEAaSDcE7dutgWdGtVHKJM9P6Job50DhBRqjS8nSQJBGmxMj73KRFiDYiQYBxoeFNSNGmCzoxQBlRtKNaGHhVQUCkfdSfI45+fV3GdfpFFYYpexMpACpy9lW1yqlpFM0z7xm6Dc2vbKcTZhVLBj1HPE8oDkjxa0CImdFonzw7znHadJgMxrpCX0mpTZAdgCqkVRpbcEBdtsZXN8cp+KPDfUpa5XUAFNmPLSpgGCYMnbCQL9LvcZ8OQaCSEjSYP2JETP/AEo+WJ1ah3QFR+xrj5qiD/lGBcnmanNTNPMqWBGsUniZENJqtCzab2J23wM2YqlARl6h/arGlTnpJNUNNow0HRHEKzjghTbYzeevU62Pzb4DqNjpqVCBr0ddIRi8d5b3d+i9r9MaPK8NJoq1HmOlS66Sr3WSV/6ib+6TBBBAjGnJ1HZxKVWcyWB5s8o2JuHUlPiazCqknYbMP1hpPoYnoQYx9EzNMVKekwy8oBJ0kWneDG3W2Mhk2lapETojUTa5gBjcQTbnlTsYkEb/AC1O0gaTAJgsB1vKzH4jGB51m9aR0cGHtx0cnz7M5WmURhT9zUJcCppXUWElylFRJa9SY6A4syd4c3PvA8xJCiAQzAal5hGlFQGNCsSDgjjCkSzNPMpUtHKTr916ye9cDkRn2gXkDUhpSoTIOliZDA6iCCW1ksW0ru5LkbhFkHTF7oSaq2ZMNP8AbEkb0xAr545joNnBSZYamIM/piJ9cRPwwB1ZLWMSSp9TiicT+tsAKstZscD4qJ+PwxycQVt2XB8exVqGPYg1jDO+0ub1eNVSnSKiNJBblDEnSNVyZF52G2FXszx51zTVatOo+sOyBQoJZiTqliLadXffBea4cKtUGrVNSLArcRN7k+gMdhjlI+NUNAcgALCFuQv3YB2gTPXHCnl9SiluemQ44r7ZVXTwlyjIHQHWz7cwBUrpF4B+91wrzPHv0gLrpJNNipEMyqZvcgX2GLOJ5dhTKGq/hf8AtaI6RzCSInCqpmUZgiXRbGwtG5A29fhhsktlGuRRp+mLIC00WBO0ztaRHT88S4xlKjqOrXntJH9cBnMCkjhiNbXkwCo3tG39MX8Pq1FGkOrAmZkE36Dm26x54z5qlShwiRT8ic66WkLTPZhp36kses3Hx3xxq9TUreGEfUYMQVjaTuPLbGjrZwq2llEET3O/l88JszkKuaqIE5GLBQS0C5gEwLAWPwxXHfkYf5bPPmFTVzExrIn3gCpMkzMg9uuw1OO5zPEMIbSoYDcKGXsTKg72BPookEm5/gVTJL4bsWVoC14AUk3ZWEShJ21FgbSdlwFxE+DTge/pkkMy2kdVZTEj9cAnfUZ09GDdIzzju0wulxAX39dY/wD0tiWdqwhhoAY/fIH+YR/5hR08v5iVajxeQpEhiTB9PtcHl5ouwfaTGrbURUBtWEWby9caJtt7iYoRinQprVOZT0Ygi9jzbgCxI7gP+8N8DoxIK6vOCZ2gRGpiLGbJ03GLsxWAjcg7kS06SCZIJnbu5mNpwrzfE0CMNQv0nbYQQSY7/wCXaRYYrZcdTPldJVwrGxZhqE7GTefSWjsMGpxYA+G6gsRqmneVNxbz7RjH53OF5Oh46kqb38ySB8enTbHOGJVZiFfQSJvsxtYR1+eBrnq9LaKsvTQyL1pM22Wqy7WKgAEyIgKWnqveNx6jD+meUKptGwtsY2Cj8aXzxh+CIUqPSZiXYfD3rwZmL+X8cbynS5PDEFgTIPWWJnSV/On8Tvgqet6vcEIKEVFeA3Ioyg6QRygELM+/UYytP1G9IepO2a4x73ONrc4MXF41tSH1tjU0KU0XETEAj3v/AAx93TUA36ouMnUo/aGAVnsGUW1GeWjTjf8AWGBFFjIZeskkkoCyi80xcjWf/FX82xM0xqZlRWLQZ03AIn3lpme12+OBBmdNXSHiV/6kHeP/ADSE/j8cX06ocSIPXo8EEr0FT9Xeem/Yw5JI5WVoBYzM9ZiOl2J+GHe1OiAL6QQQDOvSPdKANr0qDNMioB92qs4VPdRMmJt6na95+A6WwxYSAW0w1NASQsFYHh6phdM2Ac6Z92pSeVxb1L9EUZenV5pv6IMzuYSrTOumdbATUUrLlG0szaLEc16qAAltLom2N1wj/LQiSNO0EnbyM4+fPp0cxvrMzBOsad9YDlwv60VANzUXmxtsjmVaghgRpI+7eDGzkfgevXpij7G+9zMcVot47kSNVMAAF9ROpRZVPixc7EC92E4XMB4FfSRCrpgQAGIuoUco5pkLIkbs10L4rqd9CsEXebIAoESYPMOg6GQBM4WZykKWWqLqkswNxB2X7puLG4MEW2BAbZD4jNm+Fv6mc1Y7OIuccBxuOJsmdPriDnHS+K2qYFh0nScSGKg2JziMkdiYjEzlmiRceWKlxdSrMpkEjAslXyURj2G9LjbDelQfzenJHyIx7A1MOiPuBZbOJmsxKBqSLNHTrd5iWNTU/cKIHmb4Nq8IoKSxrxtuyCwEQZ6Yz2bqoq67rpYMqjZtDCZkEkdL+WJ5fUXNf7Lw2QXWQAS0+hO/XvjhxyRdyZ6Oi/2kzYdPDppTpikdS1EQBquqmfeb7ygst9ubyGE+URzUUOfe6qJItPUW/pOGXFpqOqmpCe6FgqBHcyZ29YGO5ehIdxUGkAAxvAINyYjlmbdcWOacHNC+aKRlleoUfWQCCepkCAJPkcPBRSlLBjCibQSfKdO/SMLaWYRZZm8tWlQZgxJ6wBjy5WrHKwnoZ6TJ2H0cY5ydcjIur8YZl1aCqgw0wbaSTPfbfvhcOIVqVUBSTPMDaOlx29MQrcPzJqkgDSTJ1Na+563vO2JnK1aOohtbQAgiYmxgX2n0icGMYL2CfRvZX25p1WOUzgA1/wCWze5UU/cPQOJjsbREgGHtJwNKbFMvUVlFwj65pEi2l1vp2sCCOhEacY7heRq5pTRqUD4bCWeyFGFuQkxrIAERBnzvrM5SqsgLMDUEAusqHdABJBupIjUvRidwBOvG3dMk1cboCy4r6AHVWIA2djPlLMSfU441WuEcLQPN0WsEn7oJJJvpAEgCwGAcpwOmukDUFYBoioCrglC6kpERMx1G9rezPCw7hh94A1GDLY2/XWQPTbti5ydcFMY7i/iHBa9QsNGkGwCsLj3pZ9csSSbWAn5g8O9kKgINVJUMORSrGBJ3DQO2x9MbB8nqVERxpUhSS4YRpHvMDBiR5b4rzGpCg8RACVJI0E8zQfOVHnFzfFMk75e/0/8AC5cAWU4PlPdfMV8s/wCrUCvI7jSQY9QMV5lspRqjVUFYrsTTUQCPegjUAO840PFOE+PT0khiAALDUS3UXgWB77+mBa1UUcskURCkIVZY0xIJKnzH44MpT41f2FUVzRmM74NOuczTZV6WMgqwhWAmQTZpt2icaelqAi/cDfe/uwfmEP7x3wPQOQrKzZmhTWGUagN2eQLISQbdegw0zuTXLUi6ktR95gYbQD1AiCp77364OB03qdgyRtWhrw8astU+9F496OUKbEPG3RV/hjGvS+0YxEA30xvbcURG/RsOhxtEDCxplBcQTJuCUqWO590rA79MhxDO0VaQwbWbBgobeR0JgHpJGHlkjB7gUdWyDcux8T3yOSY1t2B2/SB+WL88gB1GGnlgjV57w569sIsrnawfUnOwJBQs4CixufEj4RhweGZvNMvhPT8MsPEEMQBuSC1mFiLQQSveRIzTWoLg7o9luKEVKaibHYEi8giBufUD4dcaLJZU1KzFF0qZYoG0rrYe9TY2psxkRem+xBHLjF0aJbMFAKg8OqBDwCCDqGoGwQ9u18fQ+ApU1HxIMK1rWkgkExYxGpSOoLavewVlc1UlwUwgoybXnk7w3KEOqWgErpIKxAJCOlwkdASac3QpdC3qZk0hVWCALqvNuR7oOkg3Fp+e+KBQD1aZZTyTpa8rKMIETKwdmJXqrdMVe0WYalp+zq1AVjXSRnAuDpJWopHeDPwwummXPfgA8IiSE0WBF+YzJb3BPa6lfNlxnOLBiC0GAFVbrpAhTPLYAzYCZ5iCQCcayl4jJJXwh7xVxL8sGNGorEfedoE72xmfaytFFQCb1FklpJimLs1tTRF4HSwEFtOJ+oz516H9DPmcRIwGznufnjhONtnI7ISzYr1jv+OKgMe0HtgWN2q8loYHrjuIpTjFkYAmnfY8pxaDiCISYAJJ2A6/LDTJ8DqNJdkoqraWNRoIYiQAu5YyLWwkpqPJZDFKW0VYHRps06VZo30qTHrAx7Gt4dxymlNUy9HM5lVlTUp0iq6gTO957/O849ih9T8jdH9O23l/b/ZkF4JVqhhWpNSokSrlQfvC6AXmDPw85Es1llorJNRkC6U5Co1wQkArO8dbScBcQ4hmHZCazhC0IGqMRp3iJsIjyPyxHM1dQhF1sw67gyRIv2LfEY5/7a2N+4JRy9eqDUYMVHVrEl7Wk3EEmcMs9Up06QXlNpIiA2oG3WbRv/LC2lTqPTMtIVgGLWEmwkR53/tizNtrISZVrjQCSpUaiBG/YmOvoMLP4VH+SLkDXialoKLeJOmSSCBAmRcAfIGMHDNPIVFYKQSFET3gjefjacWZdS51slRiLKQjC8ddp3FvPHsilRQGNB3JkEHaZ7aoNpuZvgKCb4CH5BqiqVIDnsgLE/vMLD8cO+EVaRT7dPDeY0uwIP7t4IPYyRMeZW1s/mAIWi2m4UDQCOWRYNy3tfyxTw5Q1Q+Nlw5gcr1EJ6ySrM3l2xbBQT2RKaNY4p1BpBDAQYB23A26G4+YwQuVNZ28KQ6qpIYyGkQBJOomFPc4HyhpUwdI0Tci5vAHp9eeBf0/MK7mmdKMd1gFrRzdTE28wPORkTtOL3LYSVVLgb1OF1isshhf2WYX30kKbXNwO/ngFsu8lfDJIgHlI2vExtgfjPtVxCk/hI2sLf8Ay4awsC9RQGHoTOIN7fZpGDNSRTpjRCPqaIDBlVYvBg+Y88DuZPKAox+YS+pACy6QTp6DmAmPUj4nDDgRbNK5pDWEIV4ImVMgQxBI89rb2wmp+2tSsVGZoKRaWsApMzta+2me2+C+F5ZKbfpFOoaVRtmMU7TMBdivltbAjkk+Utg1Dm2OX4PTPNWy+YBsSRpJkCDOgm3lgGtw+npamlSpLTGtWVgREEFgAb3jyOGVT2qzmlRSbKVmYEqW1DVG86W/IYz3E+N8cqcoTLUg2xpqCfnVZh/xw0KluSWkM/wIkaRUNSDrAqaWlpXcntzefMO2G3C8s3hlKqWEppOz0/j03A9PPGV9luH5z9Iam2YYVPeILhhf9ksAbGbAC3pjbV/EpqA81HFjA0E3uYNha++BLJFSoKg6MnW9n/AqCpqDAsQoM82oEAMDuLwYgz0vj1D2eoZpQ3h6GkAsDYhZUypG5je9x641pzSsADbycRPz3xGu2oQPdjfpHZT28x0/Azkp8iaKE2V9kaNPmBarT0kEQhdWkQ6GNLEQRpIuCdzGB8nxsFkCqStwXHLpYe6ugmQxWTpvsYJjDNsy3I6VCitCqRp0v1XcRMmAJuB3jEsjRo1XrMqIKsGnVETTqqSIMd5Ucw5lIi/WtWlS4DwxP7RlanhVFqLTfWL6A3iAG4DAakP+oAneNwTwGgyszB5GkCBsACIFz8vd/wBDWOI47w2tl8wlTNVNNNTJMH7Taead5Egb7WxreB1F1nTM6bT2kC0edov5bmnh8M27KslWjUJIrU5JFyAbxOh56R0vse464p42x0G0NAmDvJa/LUUx+HmMBZfM6a1LaSwAkiIKusDykxaVB/UPKb/aBjoICtEi0OYMk2ik4/I+uL07Yr4K6J5DHUmPPttMn01n93pj/bE/Z0x3cn5KPM9+5389TaijU5IN7L530qSDY36wZP7HXGT9sK8+EAf1j33CR1P5n4+8dGD4zP1L/bZl8exKrvO2IgztjYzBEtWr5Y81byxNcm0S3KO5+ox7Wi7Ase/1/L44Ww9tLkL4XSRgzVNhb3gL+ZjAtevTUnnDDoFBk4GqDUZiPQfxxUMsQdSSD5WwHY8VjQTW43VTlSn4UjeOc+fNb88D1x4wUgMXSSajMPvGSSdyfXpYDB+X4eaqwFGo+8zMbTYGB08/nGBc9wzTUhXSoDBswbfoStp9DbFNxbNKemPsgWtXcABmLgEgNqMGwmCN/wC2PYaZUMVjXRSOjpJv8I+UfPHsJqxlnrKM3kVbw0FPlG7SSV5TM3uT/XEa9ZYVhLVQCp0nYAcogTJi8b+uxLb2bzLEzUCqeo1E26dowyyHDaeWUszF2FpPT0vv6447mord7msQCoxlVoVQCBAKtBI9dj8LwMSGWqJSVqp8NQfcVROk23NgJN7de+NC3GlVtIBJa0R0iZ7WE7x8cBVc+tVWmGAMG3Xtc3MdMDubbIAFWqqoJUAMoJuxNz59bX8vgMCms1RFAbVWRjBUkKGN7ltx1jyNuuAatbXWWELIG2A9JsvQH5R64tq50oGQKR2CzMm/1/abFBr68kGYzNVQn2jMbq2m+5kwCbQbT5YkuaKf9QsI3M6gotMEf169sLco+mmC5cOdQCmTA7eew6emKhSaoBoPhqsgkmLWkFgCSf5dMTe+SDelxp2gz7wIAmLzaNzNvLHP8QrqGD1ApLEgajtEQCIv8d8C8NyHOwVlsLSdRBiLSZ79DviWa4bWXSaa84+/aYO+/fEk6lVkSD8vxq0nU4VbsSzEtO0sST164Z0swH2gGdiR85mOw33OMzkMjVA0VoAuek3OqD0F+u/yxzhWcLgp92mYuSdQ23tePwwyyNX5IaytlhBVSrMYJvEkdATY4XcTzFXTpdRCjSFIsvYnY4XDiT0yKZjmNiT27X+HbfDnK55an2Zhre63SexG3wOC46l6Q37iDL55PEaGUFL2crYbxJjoTFo85xoMl7R1StNqahomSxm9xInsOovcjE04RRd5SprZeULIC9LGBzbbW+OO5uiE1ORBnlX52WTZbm8/0ONKFtgZQ9fM5ir4qscu4sXVjAAjzttsT/HGm4Xxw2FTNM1W4JIlW6TobqBMFe+1owkocMq5thVJKIuoRvDFZA7Eix3v17YXZqmoId0HiRIZVNwZAgb9N9sLKa9trLItx3PpT8RpFJzOgAAkuDA3WNQfY3MR1A2mMZ3jeYydRTTp+KDUACi8vOhtQVXBXYg6oNj03xzPUYMVLGmeh1FZ6QCRHaxxZwoVUqKyuKTs4UsFLjSxuCQCYiTB+eCoerYPcvwfT24TT8Km9JdVKBNObqQCreHqmL/dO4j4qOCZNst9t4hqUm/zCxAZIhTrBN7AXEGRsZGI8HzmaytWoNS18uWkiDqYGTNNp3W3SDt6aSk1HMamytUByIemRcjs6G5/eHz6YKq9xnuthZxXMeCalOogq0m+0CEBpExVAm0gkN6A47keEUadSo+WaVZeakTMEgNqWe6kSDM2mbYPz2TNWkFKaKqWCk2NoiY9xxKm0j5SjzGQPK5+zqUismTrCgFqYUTDMVOmNiUImNnWxXKNneIm4ZAXKlHK3F1aLibN0E36Bm2HuOVkq6VQhtQAEhJ2IiGSTF9tQsZAx3iWYy9fMDQxpVzTBRmEK61L6GUneRpIYb28sL85mWSaZoulQkBwAXV1I3XnWBa7MHP3SSLYZO5FMlS3DU5rnsRBmRqM6SGBI/dMbD7MxI+fca4ua+ZWnRiooldRBIdrbG507CZgmTJ95txl+G1WUo32SFdP7WnysAAeyqq/snfEUTI5BAFADGAN3diTAA6xPwxeotLkqtS2qzOZ/wBn9DcpDxYxsD2M74Wl2QwqhD5jf688Pcxxg0sxVKwysRK9iBpMedr97XGFWarNX8aoyBQs+GVBJNwO9+k9vnjVJyhWvhmVwTvQBlyxljJ8zP8AbEypwO9JkdlmWESO0ib9seSr339cXRp8GOcZJlpxEn6nESoPbEDTwXGiJIJoZsoQVaCMNV4shSNKiTLqqoNd55jGqN5AN56XwgK45GKZ4oydmjHOUFSYXUUEz/HHsCaj3OPYjxRYicl5NkvFqayoknvNp7dgb4y+cpJrcrXcamkyAQG2G5Em+4jC6vVLsWSm86pJCv5bEDfyF7DyxeHqCmwbleQQTuo3v+1IPzE3xwakuTtWcQVNWkNLCdRdCvUmZkwDtHbFeZo1oLM6U9XKFE9BydJBsfl8BNeIhlBDEmIPQdAxja9rzERtiirxGAwUA6XEC7G8bWNt74ZKV8EC6dbwqfhhtTC/Kd5Mmwv8cTyOcqFdcHUXgBjBC2kiO3f44q4Rn6oUuOUCJke8T724/DzGC+LcSCwxFN2BB5VB3+ffe22GlFN/MAvWlmq2o2UbdLdxAwVU4LVOgOdIG7apDA7aOxj1viXD+KFp0U1VOu4gn8z3+GIvVqQwJ0sxt94HaNtj5m8YWUq2SSJRZlUoUbxqaZ7x23P54b/42kgQGJMSLHacZTM6AyS8OtidM6ukjbF+XyqU3/z4n9i35yNsDt2rsidDdsylSZJBEyBeIm8j+mAv0BaUsknVcne29vX+WJ0+Gu6OEzKQxmdBBBPQifkcFrwd5l8wBaIVWHlaSZxNHi0vuNfuJONXhp0kC4kGV+fWN8ezuYYMii4N9ImY6T3B3thhxrh9AMTUqM/7Nlg23t54ATkAZRAgALc77taen13aLUa80Kxpwt1B1mk1QMpBiNwDAIG/a+GVOstQQwJj7rbjfvJ77zjPDN1HYMp0RYSTBAHex27C1/KfB3Ts4AtDf9wJBjb5YslPbdARp8jmDRBTL1SWAnS8Fug5VjSQB2E4Q8Wz9RxplwSQrNpAgzzHoTuTtvPe88lm3kAnUJIPkRtBO/zwfUisdOhnYCxkKwEQYJJBI7GfXAlBSez+wyl4E+YyhKwKxUG5jrPu2FxfvOGf6PFG9coxYHUOouNJ7EzPlA2xbleBhamtKgLgRcQTa95ILRafK0Yhn6KiPEme2o9/eMHzt1OB6scdichvB6z0vdOmnudZMX/Za4bzGHdA5aqfFNSHp3CnlK2PN3axN+k7A4wbuBVmYGm8atJgjeD9flzKOa17EWgyFOqwFjFwO/Y36YmNufI2qj6dwfiBrso/SaxXVKDVq1hTeCZIsG5bWBmAMP8AM5UVFFKvBMgo4sGgwLE73IK9ZO2w+O8B4nVy1QVAdYb7rUyUYoSUZT91gT/DtH172c9oKWdpNpp6dPK8sGGuBKge8NwZiII3G1bjKErst1xltRl/ajgq0xS18x8MUg5vcF25liSIO4uLTInDrhD1UyimtLOpZQfeYrJAE7na3cRiWZ4siO1OuVeiSArEEsp0319I6BgSbGcI/a/jlBVGXDciqZVZ1GBoVVAvbva1564vhJtJlcoVYv4p7WFqwpKlRjIlUAmD7ssWAQG2/e2FVJLA1TTD+IahCsTNyAJIkhY3sP48y2bNRKwCGkLRDSWnm1kjrNwQT1ucC5PM0KH2mYYFV92kLmo3TUBfSPOJsNpOLMeJyqc2VznpuEUWZ56ud+xy1MQHh620RbTPYdQAWPQRuVw7gqgHLGsyPq1FwdJLagPgpgbmYKnywv4j7c16h1oAiT2kn1iLfsiB64OynGqTKlWqGJZgNenl1bWvsIvAgemHnk39yrQkgzO0lGp20gmATa9rX64SeGjlolIMSbA4Z5nMpmKnhU0NXTJJQn3hsotzHbb88U5/JsoY1rJbQogwbfI2ucWwz1sUywpimtQamb/PEC4/th9lslUedSjwyOVeqjpJgT9bYEzHA3B5bjscbIZk0ZJ4WnsLZ+v74gwwS3D6g+7iBpN95Ti20yumgeMexbA6j5f1OPYGkFjDOVVoKESxToTMAzv0B+GM8+dpMpd1RqmqAN7TOwsdsX1kSq7a2EAAkq25iOonob+uCuGVsuhEIAwMapnbf5eW8Y8983bZ2z3BoZeXK0iJHMyC83jeMaSiioBpoUVPZUFvwwJk88lQkKCYEmxiMEitG7f7Yb8rD4kYrcssnUUK5Vu2LOPZoaZqCQAbbAW6xFjjPqKahCUCyJBfVJMyABafr464uJmI892+B+78L+ZxF6AYn9UiGQ3V+tx3Hfcd8a8fS5NNye5S+qhZmuJ5keItMVCE6wI1HeAT1m31GKMxqKNo1swYxqUk9IFhsd9saOlw9EYnQB0BBcmCIIBdmK23KxPWceFBFI0iCO3b+Pxw8Ol2Vivq4+NxLTyZLa6vKYEIBdBFtWoWY2sRtBO4x6tSR0DWgG7EXEXgnvNvw88PUWNrf1tHaL7YAzfDKRIPOkmSKYUjUTM8xBHW197RtiZenkqpjY+phLnYDy/FkktJ1WAA62HQeuNNkq+pLGWHvMBEHfSOwA3i5PbbCyhwzL07rSEjqzMxPxkAfAYb5assKFHSVHYCzA+YJF+oIPWBmz4njjaX39izHkjN0mJ+I8CFQ6tbiegi/wDLAf8AhrU10Kx8g1ybzAIg9cavMPqt18hgTNZdReofgN/j0H54yxlJ7eC57GYz22kNrdpiOUJa7T6fOdsCjLkCFdXC8znaZuR1B2Nj2HUgYfZ2mqlGVYBmY3kbCdyDb5YUBqjawEUGSZtGm3Tuf4+WNCkKU5XJVXJNOEG3TTt2BkGwwdTV0XTJB6uGta1436/LFFMxpBPIbiGiPxxHMkkrbVTmCd7XPxvb0w+TVF0RU0M+C5+mGqOQahkADVYnuQTH0cNK7isZdUdTbUp0uu8wQIbYCCO98ZytyFQga4uouQNreXxIxOhnBBbTDdusiQJnr18sM8ia3WxFaGWc4InvLNSBEdVHWVO/rfAtVqQLMzCW5SSNwL2iwM98VLxKtEBYaJk899woCkH4+pwRm6qnSzsAf2ogk2mfWYn8cVvGpfCw2cNdRGopBB2DbAWueUfWwvjuXzrZZnNCKZNmZIPMsxrixAM/z2xS9BqaamKsy3FiZEmJ62+M3wemfoVKSsAqEzIg6CRHoR8e/rhrUYNNEvcfcP4stZdQTlFnUklh1Zl1nmSTY97GIk89pjlF0E1VllYBI5zcm/RQDNzbtPXL5iaZDJaGncyBdCFKmYg7H0OFOaQMwfxZLFgq6e+8yexFziRdoseQbZ3ixVSQplvdBM6osCduW3S9oB7IqZZlqNUhiYg7HUSSRA2ER8sHUeH1mYrAaR717XmTPf8AjhivBdHM9/KSR64Msq01JlSRmzliwiCPLvPX+mO5ai5B5gFEgA9DaSJsPXGn4bmVlgVAUCBvO/btjmcyNKoCFYpuJiLz1g/3nCPP4oiiDeyFNAxqaiGm0GOXqRHkT+GPoHDsyK7mmKbGN2N1+JPX874+bU8mUZVeowAFmUEyYMTHQ+Xfyw59ls89DUWd1Y+83TlnSYuTvhnkfKYmlWbJkrUhVLoHCsFUU4kAxuDeL9uhxKsFJiI1KGSGWTKyZB2iYvGJ5LMM8uKw8FIc1A8K1QOCwdYtcTeD+eLMzqNN6tSgrVZARkIOpSQFsAehn1wI5JLbUW6FzRLI8OyrMRVBBnqzAFoBgRJHxn44d0eBZUhl8Ea1sSxY/EAsfxwo4dl6Rar4hdSoAJIIB1rJ0kk6o9LbYe5PMqF+z0so8yW9DIt6R0w3cn7jduPsBf4HQkzlaXwT+Q+u5x3DZ80WAKlR3BBP5HHsTuz92Hs4/ZH52o6CuhQVkTI3m257X2vieSprTLgwx0yd4IjV1O310wxOURDUCiJN/Od8KcuAa9FCAVdoYdwJN/LCxevYqNBSqhkpwIUoH0gWBe4P+3Tv3PfFvi4FVyRJMk3Jx6cdOEdMdKOXllrk2FI+LlrDAC4lWtHrgsqcfAY98UYpo1jBwRpEYmqicHtcYqqVsV1Wxbl6QKM5uQYjp+GA51ux8eNydIpqZmN9vr6+OC8lmEBTU+iFK3FuZtUg9CbAz0C3wiGaZ6pRo0ggAAQL/wBsDZSoW1T0e3lyqbdr/njNfdbhI2rH2/UjV8Q4xoVgggjzv3uex8rEYUZ7irArzABtwYm17Rsd9/K+KTU103DQdFNmU9RpEx+6e3yg4XV6QASpcm9jtcxPrGMs8OmVM0QnrjYfneIOVKgTDSP9onb4H44oTKPdTUUGpFtJncg9b99p9MB5ptQJ+EDbYH88V0M+5K3iJgix6fzOLIwuKog1fL6SCGkIBECZ9RP4Yjn8wSWIAmwCFSInY/A/lvhO2bY1Rf7s/jg2tnWBUWI1xBEgg9DOFkpN2wpUE57PaFVacFj7zjcEb3+rz3xXl30g1FTmtqgSSNyY7R9WwFnM2zNpJ5RBjDzgp5RtckbAWnywdowp+SeSivmCukKXYvebRtfcWt/DsMer5pBBBBDQDPNAUE2gcrdx1tgXiTFXCgmJjta1repxTnyFEAADt3g2OEUPURjbKcTqSuoAISQCQ0jc/lsMHZWulcnxVkkwrqArehvD/IHGTfMtUUBjbfYbzGGnDqhC79J/H+d/XFr2W5NzX1MjSpjmRWciIAjUOhYRuPiMZ0UDTkGCDNxy3I0gkib+Y74jQzTgzqJgLveZnfrgxH1KCeow1KUQC5KrrbxBp6NESZMjrEfjhnlsyIMMWt1n+OBauTVlMzygkQe3T0wIXKwATHqcZ8kK2J5Lc5W5wDIv3IBvba+F1fiGup9kGgEQduxvFh8sSNZg2+5O8dDFu2J8SheUAAFln4zOJGNBDl4joEFgWiehjyF/X8IjFa5oPZiB6Tf18vj8sKdOnURc6pv3g4ueoYJkicN20AO/TWoh1FRgjG6jY/jHaDGH3DfacU6FLWmoL2mQuqQB026XxnM4mpea/SPmP4YU8QrFURRtzf8AGCPzxIxv6hPslfPUalJGTM65Qa0JUOpFj7oCx01AR5YFXPVVGqmwUyApmZnctpsw3+IxkOCIpBLKrHTBJFyDMzjTGsaGXilywxAMSRI3vacDS7sZT9zaZfMtpBqU1DETaDeL7zHzOPYzfDOLVKlNWaJKifqcew2lja0f/9k=",
      weather: "25 - 32 C",
      travelDuration: "8-10 hours",
      famousPlacesToVisit: "Otres Beach, Bamboo Island, Chhak Saracen.",
      __v: 0,
      airportName: "Sihanoukville International Airport",
      airportType: "Native Airport",
      createdAt: "2020-10-27T06:10:01.300Z",
      updatedAt: "2020-10-27T06:10:01.300Z",
    },
    {
      coordinates: {
        latitude: "28.2096",
        longitude: "83.9856",
      },
      _id: "5ef5effadb65dc0017ca6935",
      cityName: "Pokhara",
      countryName: "Nepal",
      aboutCity:
        "1. Pokhara is a city on Phewa Lake, in central Nepal.\n2. It’s known as a gateway to the Annapurna Circuit, a popular trail in the Himalayas.",
      idealDays: "8-10 days",
      imageUrl:
        "https://img.traveltriangle.com/blog/wp-content/uploads/2018/10/Phewa-Lake-Cover.jpg",
      weather: "21 C",
      travelDuration: "10-12hours",
      famousPlacesToVisit:
        "1. Phewa Lake / Tal 2. David’s falls 3. Bindabasini temple 4. Gupteshwor Mahadev 5. Bats Cave 6. Mahendra cave 7.Museum 8. Begnas Lake 9. Sarangkot 10. World Peace Stupa",
      __v: 0,
      airportName: "Tribhuvan International",
      airportType: "Nearest Airport",
    },
    {
      coordinates: {
        latitude: "4.1755",
        longitude: "73.5093",
      },
      _id: "5ef5f193db65dc0017ca6937",
      cityName: "Male",
      countryName: "Maldives",
      aboutCity:
        "Malé is the densely populated capital of the Maldives, an island nation in the Indian Ocean. It's known for its mosques and colorful buildings. The Islamic Centre (Masjid-al-Sultan Muhammad Thakurufaanu Al Auzam) features a mosque, a library and a distinctive gold dome. Near the harbor, a popular fish market offers the day's catch, and a produce market is stocked with local fruit",
      idealDays: "3-4 days",
      imageUrl:
        "https://images.pexels.com/photos/3601437/pexels-photo-3601437.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      weather: "27 - 31 C",
      travelDuration: "4-6 hours",
      famousPlacesToVisit: "Hulhumale, Atoll, Sultan Park",
      __v: 0,
      airportName: "Velana International Airport (MLE)",
      airportType: "Native Airport",
      createdAt: "2020-09-17T07:22:25.127Z",
      updatedAt: "2020-09-17T07:22:25.127Z",
    },
    {
      coordinates: {
        latitude: "14.679442",
        longitude: "121.038155",
      },
      _id: "5ef5f1a1db65dc0017ca6938",
      cityName: "Quezon City",
      countryName: "Philippines",
      aboutCity:
        "Quezon City is located on the Guadalupe Plateau, just northeast of Manila, in the Philippines",
      idealDays: "5-6 days",
      imageUrl:
        "https://images.summitmedia-digital.com/topgear/images/2020/05/21/quezon-city-travel-pass-guidelines-1590038324.jpg",
      weather: "30 C",
      travelDuration: "8-10 hours",
      famousPlacesToVisit:
        "Quezon Memorial Circle, Monasterio de Santa Clara,  Eastwood City",
      __v: 0,
    },
    {
      coordinates: {
        latitude: "22.3193",
        longitude: "114.1694",
      },
      _id: "5ef7441c76c2890017d6b5d2",
      cityName: "Hong Kong",
      countryName: "Hong Kong",
      aboutCity:
        "1. Hong Kong, officially the Hong Kong Special Administrative Region of the People's Republic of China, is a metropolitan area.\n2. Special administrative region of the People's Republic of China on the eastern Pearl River Delta of the South China Sea.",
      idealDays: "4-5 days",
      imageUrl:
        "https://d3500i1ecak5li.cloudfront.net/s3fs-public/styles/banner/public/images/chapters/HKG1.jpg",
      weather: "25 C - 31 C",
      travelDuration: "4-6 hours",
      famousPlacesToVisit:
        "1. The Peak 2. Tsim Sha Tsui Promenade 3. \t Hong Kong Disneyland 4. Ladies' Market 5. Ocean Park Hong Kong 6. Temple Street Night Market 7. Lan Kwai Fong/SoHo 8. Golden Bauhinia Square  9. Lantau Island — Ngong Ping 10.Stanley",
      airportType: "Native Airport",
      airportName: "Hong Kong International Airport",
      __v: 0,
    },
  ];

  var settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    arrows: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    // centerMode: true,
    // centerPadding: "100px",
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="top_destination">
      <div className="section_heading">
        <div className="section_subtitle">top destinations</div>
        <div className="section_titles">
          <h2>Touron - Operator</h2>
        </div>
        <div className="descriptions">
          <div className="left">
            <p className="text">
              Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam
              eget risus varius blandit sit amet non magna. Vivamus sagittis
              lacus vel augue laoreet rutrum faucibus dolor auctor
            </p>
          </div>
          <div className="right">
            <p className="text">
              Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam
              eget risus varius blandit sit amet non magna. Vivamus sagittis
              lacus vel augue laoreet rutrum faucibus dolor auctor
            </p>
          </div>
        </div>
      </div>
      <div className="section_content popular_destination__content">
        <div className="section_item">
          {cities.map((t, index) => {
            if (width < 1300 ? index < 6 : index < 7)
              return <TopdestinationTile t={t} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
