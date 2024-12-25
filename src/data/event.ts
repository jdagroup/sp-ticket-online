import { EventProps, EventStatus } from "../types/event";

const items: EventProps[] = [
  {
    eventId: '1a2b3c4d-1234-5678-9abc-def012345678',
    orgId: "1",
    name: 'Konser Sheila On 7',
    dateStart: '20 - 21 Jan 25',
    dateEnd: '20 - 21 Jan 25',
    ticketPrice: '250,000',
    ticketAmount: 30,
    ticketRegOpen: "2024-12-12",
    ticketRegClose: "2024-12-31",
    status: EventStatus.Pending,
    location: 'Jakarta (Senayan)',
    organizier: {
      eoId: '2',
      name: 'Lapang Suara'
    },
    description: `
      Sheila On 7, one of Indonesia's most iconic bands, is set to perform an unforgettable concert in Jakarta this January. Known for their timeless hits, the band promises to take the audience on a nostalgic journey through their career. Expect a night of soulful lyrics and melodies that resonate across generations.

      The event will take place in the vibrant Senayan area, known for its buzzing atmosphere and easy accessibility. Fans are encouraged to arrive early to enjoy pre-show festivities, including food stalls and merchandise booths.

      The two-day concert will feature different setlists on each day, ensuring a unique experience for attendees. Highlights include classic hits like "Dan," "Sephia," and "Kita," as well as some surprises.

      Lapang Suara, the event organizer, has a reputation for delivering high-quality live music experiences. They have invested in top-notch sound and lighting systems to ensure an immersive experience for everyone.

      With tickets selling fast, don't miss your chance to be part of this memorable event. Whether you're a longtime fan or new to their music, Sheila On 7's concert is a must-attend for all music lovers.
    `
  },
  {
    eventId: '2b3c4d5e-2234-6789-abcd-ef012345679',
    orgId: "1",
    name: 'Stand-Up Comedy Raditya Dika',
    dateStart: '12 Feb 25',
    dateEnd: '12 Feb 25',
    ticketPrice: '100,000',
    ticketAmount: 50,
    ticketRegOpen: "2024-12-12",
    ticketRegClose: "2024-12-31",
    status: EventStatus.Pending,
    location: 'Bandung (Saparua)',
    organizier: {
      eoId: '3',
      name: 'TiketKu'
    },
    description: `
      Raditya Dika, Indonesia's beloved comedian, author, and filmmaker, returns to the stage with his latest stand-up comedy show. Known for his witty humor and relatable storytelling, this show promises to leave audiences in stitches.

      Taking place in the intimate Saparua venue in Bandung, the setting is perfect for a night of laughter. The cozy atmosphere will allow Raditya to connect with his audience like never before.

      The show will feature brand-new material, tackling everyday topics with Raditya's unique comedic twist. Fans can expect hilarious takes on relationships, family, and the quirks of Indonesian culture.

      Organized by TiketKu, the event will include a meet-and-greet session after the show for fans who purchase VIP tickets. This is a rare opportunity to interact with the comedian up close.

      With limited tickets available, comedy enthusiasts are advised to book their seats early. Get ready for an evening filled with humor and unforgettable moments.
    `
  },
  {
    eventId: '3c4d5e6f-3234-789a-bcde-f012345680',
    orgId: "1",
    name: 'Festival Jazz',
    dateStart: '15 - 16 Mar 25',
    dateEnd: '15 - 16 Mar 25',
    ticketPrice: '500,000',
    ticketAmount: 80,
    ticketRegOpen: "2024-12-12",
    ticketRegClose: "2024-12-31",
    status: EventStatus.Pending,
    location: 'Yogyakarta (Malioboro)',
    organizier: {
      eoId: '4',
      name: 'Jazz In Town'
    },
    description: `
      The Festival Jazz in Yogyakarta is back, bringing together world-class musicians and local jazz talent. This two-day event promises an incredible lineup of performances in the heart of Malioboro, a cultural hub in the city.

      Attendees can look forward to a diverse range of jazz styles, from smooth and contemporary to upbeat fusion. International headliners will share the stage with celebrated Indonesian artists, making it a truly global event.

      Beyond the music, the festival offers workshops and jam sessions, allowing fans to engage directly with the artists. It's an excellent opportunity for aspiring musicians to learn from the best.

      Organized by Jazz In Town, the event will feature a vibrant festival village with food trucks, craft stalls, and art installations. The venue's open-air design enhances the overall experience, blending music with the charm of Yogyakarta.

      Tickets are selling fast, so don't miss out on this celebration of jazz. Whether you're a die-hard fan or new to the genre, this festival has something for everyone.
    `
  },
  {
    eventId: '4d5e6f7g-4234-89ab-cdef-012345681',
    orgId: "1",
    name: 'Konser Noah',
    dateStart: '10 Apr 25',
    dateEnd: '10 Apr 25',
    ticketPrice: '300,000',
    ticketAmount: 20,
    ticketRegOpen: "2024-12-12",
    ticketRegClose: "2024-12-31",
    status: EventStatus.Pending,
    location: 'Surabaya (Gelora Bung Tomo)',
    organizier: {
      eoId: '5',
      name: 'Langit Musik'
    },
    description: `
      Noah, one of Indonesia's top rock bands, is set to perform in Surabaya at the iconic Gelora Bung Tomo stadium. This concert is part of their highly anticipated national tour, showcasing their latest album alongside fan-favorite hits.

      Fans can expect a high-energy performance with stunning visuals and cutting-edge stage design. The band's charismatic frontman, Ariel, will lead the audience through an unforgettable evening of music and emotion.

      The venue, Gelora Bung Tomo, is known for hosting major events and offers excellent facilities for concert-goers. Attendees are encouraged to arrive early to enjoy the pre-show atmosphere.

      Langit Musik, the event organizer, is known for delivering exceptional live music experiences. Their collaboration with Noah ensures that every detail of the concert is carefully planned.

      With limited tickets remaining, this is your chance to witness Noah's electrifying live performance. Don't miss out on a night that will leave you wanting more.
    `
  },
  {
    eventId: '5e6f7g8h-5234-9abc-def0-123456782',
    orgId: "1",
    name: 'The 1975 Live',
    dateStart: '25 - 26 May 25',
    dateEnd: '25 - 26 May 25',
    ticketPrice: '800,000',
    ticketAmount: 5,
    ticketRegOpen: "2024-12-12",
    ticketRegClose: "2024-12-31",
    status: EventStatus.Pending,
    location: 'Jakarta (JCC)',
    organizier: {
      eoId: '6',
      name: 'Big Sound'
    },
    description: `
      Noah, one of Indonesia's top rock bands, is set to perform in Surabaya at the iconic Gelora Bung Tomo stadium. This concert is part of their highly anticipated national tour, showcasing their latest album alongside fan-favorite hits.

      Fans can expect a high-energy performance with stunning visuals and cutting-edge stage design. The band's charismatic frontman, Ariel, will lead the audience through an unforgettable evening of music and emotion.

      The venue, Gelora Bung Tomo, is known for hosting major events and offers excellent facilities for concert-goers. Attendees are encouraged to arrive early to enjoy the pre-show atmosphere.

      Langit Musik, the event organizer, is known for delivering exceptional live music experiences. Their collaboration with Noah ensures that every detail of the concert is carefully planned.

      With limited tickets remaining, this is your chance to witness Noah's electrifying live performance. Don't miss out on a night that will leave you wanting more.
    `
  },
  {
    eventId: '6f7g8h9i-6234-abcd-ef01-234567893',
    orgId: "1",
    name: 'Konser Dewa 19',
    dateStart: '3 Jun 25',
    dateEnd: '3 Jun 25',
    ticketPrice: '200,000',
    ticketAmount: 15,
    ticketRegOpen: "2024-12-12",
    ticketRegClose: "2024-12-31",
    status: EventStatus.Pending,
    location: 'Bandung (Siliwangi)',
    organizier: {
      eoId: '7',
      name: 'Nada Promotama'
    },
    description: `
      Noah, one of Indonesia's top rock bands, is set to perform in Surabaya at the iconic Gelora Bung Tomo stadium. This concert is part of their highly anticipated national tour, showcasing their latest album alongside fan-favorite hits.

      Fans can expect a high-energy performance with stunning visuals and cutting-edge stage design. The band's charismatic frontman, Ariel, will lead the audience through an unforgettable evening of music and emotion.

      The venue, Gelora Bung Tomo, is known for hosting major events and offers excellent facilities for concert-goers. Attendees are encouraged to arrive early to enjoy the pre-show atmosphere.

      Langit Musik, the event organizer, is known for delivering exceptional live music experiences. Their collaboration with Noah ensures that every detail of the concert is carefully planned.

      With limited tickets remaining, this is your chance to witness Noah's electrifying live performance. Don't miss out on a night that will leave you wanting more.
    `
  },
  {
    eventId: '7g8h9i0j-7234-bcde-f012-345678904',
    orgId: "1",
    name: 'Festival Dangdut',
    dateStart: '18 Jul 25',
    dateEnd: '18 Jul 25',
    ticketPrice: '50,000',
    ticketAmount: 100,
    ticketRegOpen: "2024-12-12",
    ticketRegClose: "2024-12-31",
    status: EventStatus.Pending,
    location: 'Medan (Lapangan Merdeka)',
    organizier: {
      eoId: '8',
      name: 'Goyang Nusantara'
    },
    description: `
      Noah, one of Indonesia's top rock bands, is set to perform in Surabaya at the iconic Gelora Bung Tomo stadium. This concert is part of their highly anticipated national tour, showcasing their latest album alongside fan-favorite hits.

      Fans can expect a high-energy performance with stunning visuals and cutting-edge stage design. The band's charismatic frontman, Ariel, will lead the audience through an unforgettable evening of music and emotion.

      The venue, Gelora Bung Tomo, is known for hosting major events and offers excellent facilities for concert-goers. Attendees are encouraged to arrive early to enjoy the pre-show atmosphere.

      Langit Musik, the event organizer, is known for delivering exceptional live music experiences. Their collaboration with Noah ensures that every detail of the concert is carefully planned.

      With limited tickets remaining, this is your chance to witness Noah's electrifying live performance. Don't miss out on a night that will leave you wanting more.
    `
  },
  {
    eventId: '8h9i0j1k-8234-cdef-0123-456789015',
    orgId: "1",
    name: 'Konser Fiersa Besari',
    dateStart: '9 Aug 25',
    dateEnd: '9 Aug 25',
    ticketPrice: '150,000',
    ticketAmount: 25,
    ticketRegOpen: "2024-12-12",
    ticketRegClose: "2024-12-31",
    status: EventStatus.Pending,
    location: 'Malang (Graha Cakrawala)',
    organizier: {
      eoId: '9',
      name: 'Suara Kecil'
    },
    description: `
      Noah, one of Indonesia's top rock bands, is set to perform in Surabaya at the iconic Gelora Bung Tomo stadium. This concert is part of their highly anticipated national tour, showcasing their latest album alongside fan-favorite hits.

      Fans can expect a high-energy performance with stunning visuals and cutting-edge stage design. The band's charismatic frontman, Ariel, will lead the audience through an unforgettable evening of music and emotion.

      The venue, Gelora Bung Tomo, is known for hosting major events and offers excellent facilities for concert-goers. Attendees are encouraged to arrive early to enjoy the pre-show atmosphere.

      Langit Musik, the event organizer, is known for delivering exceptional live music experiences. Their collaboration with Noah ensures that every detail of the concert is carefully planned.

      With limited tickets remaining, this is your chance to witness Noah's electrifying live performance. Don't miss out on a night that will leave you wanting more.
    `
  },
  {
    eventId: '9i0j1k2l-9234-def0-1234-567890126',
    orgId: "1",
    name: 'Stand-Up Pandji Pragiwaksono',
    dateStart: '2 Sep 25',
    dateEnd: '2 Sep 25',
    ticketPrice: '120,000',
    ticketAmount: 40,
    ticketRegOpen: "2024-12-12",
    ticketRegClose: "2024-12-31",
    status: EventStatus.Pending,
    location: 'Bandung (Trans Studio)',
    organizier: {
      eoId: '10',
      name: 'Gelak Tawa'
    },
    description: `
      Noah, one of Indonesia's top rock bands, is set to perform in Surabaya at the iconic Gelora Bung Tomo stadium. This concert is part of their highly anticipated national tour, showcasing their latest album alongside fan-favorite hits.

      Fans can expect a high-energy performance with stunning visuals and cutting-edge stage design. The band's charismatic frontman, Ariel, will lead the audience through an unforgettable evening of music and emotion.

      The venue, Gelora Bung Tomo, is known for hosting major events and offers excellent facilities for concert-goers. Attendees are encouraged to arrive early to enjoy the pre-show atmosphere.

      Langit Musik, the event organizer, is known for delivering exceptional live music experiences. Their collaboration with Noah ensures that every detail of the concert is carefully planned.

      With limited tickets remaining, this is your chance to witness Noah's electrifying live performance. Don't miss out on a night that will leave you wanting more.
    `
  },
  {
    eventId: '0j1k2l3m-0234-ef01-2345-678901237',
    orgId: "1",
    name: 'Konser Tulus',
    dateStart: '15 - 16 Oct 25',
    dateEnd: '15 - 16 Oct 25',
    ticketPrice: '450,000',
    ticketAmount: 10,
    ticketRegOpen: "2024-12-12",
    ticketRegClose: "2024-12-31",
    status: EventStatus.Pending,
    location: 'Semarang (Simpang Lima)',
    organizier: {
      eoId: '11',
      name: 'Nada Harmoni'
    },
    description: `
      Noah, one of Indonesia's top rock bands, is set to perform in Surabaya at the iconic Gelora Bung Tomo stadium. This concert is part of their highly anticipated national tour, showcasing their latest album alongside fan-favorite hits.

      Fans can expect a high-energy performance with stunning visuals and cutting-edge stage design. The band's charismatic frontman, Ariel, will lead the audience through an unforgettable evening of music and emotion.

      The venue, Gelora Bung Tomo, is known for hosting major events and offers excellent facilities for concert-goers. Attendees are encouraged to arrive early to enjoy the pre-show atmosphere.

      Langit Musik, the event organizer, is known for delivering exceptional live music experiences. Their collaboration with Noah ensures that every detail of the concert is carefully planned.

      With limited tickets remaining, this is your chance to witness Noah's electrifying live performance. Don't miss out on a night that will leave you wanting more.
    `
  },
  {
    eventId: '1k2l3m4n-1234-f012-3456-789012348',
    orgId: "1",
    name: 'Konser Glenn Fredly Tribute',
    dateStart: '29 Oct 25',
    dateEnd: '29 Oct 25',
    ticketPrice: '180,000',
    ticketAmount: 60,
    ticketRegOpen: "2024-12-12",
    ticketRegClose: "2024-12-31",
    status: EventStatus.Pending,
    location: 'Makassar (Pantai Losari)',
    organizier: {
      eoId: '12',
      name: 'Harmonia'
    },
    description: `
      Noah, one of Indonesia's top rock bands, is set to perform in Surabaya at the iconic Gelora Bung Tomo stadium. This concert is part of their highly anticipated national tour, showcasing their latest album alongside fan-favorite hits.

      Fans can expect a high-energy performance with stunning visuals and cutting-edge stage design. The band's charismatic frontman, Ariel, will lead the audience through an unforgettable evening of music and emotion.

      The venue, Gelora Bung Tomo, is known for hosting major events and offers excellent facilities for concert-goers. Attendees are encouraged to arrive early to enjoy the pre-show atmosphere.

      Langit Musik, the event organizer, is known for delivering exceptional live music experiences. Their collaboration with Noah ensures that every detail of the concert is carefully planned.

      With limited tickets remaining, this is your chance to witness Noah's electrifying live performance. Don't miss out on a night that will leave you wanting more.
    `
  },
  {
    eventId: '2l3m4n5o-2234-0123-4567-890123459',
    orgId: "1",
    name: 'Festival Rock Indonesia',
    dateStart: '4 Nov 25',
    dateEnd: '4 Nov 25',
    ticketPrice: '350,000',
    ticketAmount: 70,
    ticketRegOpen: "2024-12-12",
    ticketRegClose: "2024-12-31",
    status: EventStatus.Pending,
    location: 'Bali (Garuda Wisnu Kencana)',
    organizier: {
      eoId: '13',
      name: 'Gema Bumi'
    },
    description: `
      Noah, one of Indonesia's top rock bands, is set to perform in Surabaya at the iconic Gelora Bung Tomo stadium. This concert is part of their highly anticipated national tour, showcasing their latest album alongside fan-favorite hits.

      Fans can expect a high-energy performance with stunning visuals and cutting-edge stage design. The band's charismatic frontman, Ariel, will lead the audience through an unforgettable evening of music and emotion.

      The venue, Gelora Bung Tomo, is known for hosting major events and offers excellent facilities for concert-goers. Attendees are encouraged to arrive early to enjoy the pre-show atmosphere.

      Langit Musik, the event organizer, is known for delivering exceptional live music experiences. Their collaboration with Noah ensures that every detail of the concert is carefully planned.

      With limited tickets remaining, this is your chance to witness Noah's electrifying live performance. Don't miss out on a night that will leave you wanting more.
    `
  },
  {
    eventId: '3m4n5o6p-3234-1234-5678-901234560',
    orgId: "1",
    name: 'Konser Raisa',
    dateStart: '20 Nov 25',
    dateEnd: '20 Nov 25',
    ticketPrice: '300,000',
    ticketAmount: 18,
    ticketRegOpen: "2024-12-12",
    ticketRegClose: "2024-12-31",
    status: EventStatus.Pending,
    location: 'Jakarta (Balai Sarbini)',
    organizier: {
      eoId: '14',
      name: 'Cinta Musik'
    },
    description: `
      Noah, one of Indonesia's top rock bands, is set to perform in Surabaya at the iconic Gelora Bung Tomo stadium. This concert is part of their highly anticipated national tour, showcasing their latest album alongside fan-favorite hits.

      Fans can expect a high-energy performance with stunning visuals and cutting-edge stage design. The band's charismatic frontman, Ariel, will lead the audience through an unforgettable evening of music and emotion.

      The venue, Gelora Bung Tomo, is known for hosting major events and offers excellent facilities for concert-goers. Attendees are encouraged to arrive early to enjoy the pre-show atmosphere.

      Langit Musik, the event organizer, is known for delivering exceptional live music experiences. Their collaboration with Noah ensures that every detail of the concert is carefully planned.

      With limited tickets remaining, this is your chance to witness Noah's electrifying live performance. Don't miss out on a night that will leave you wanting more.
    `
  },
  {
    eventId: '4n5o6p7q-4234-2345-6789-012345671',
    orgId: "1",
    name: 'Orkestra Beethoven',
    dateStart: '7 Dec 25',
    dateEnd: '7 Dec 25',
    ticketPrice: '600,000',
    ticketAmount: 12,
    ticketRegOpen: "2024-12-12",
    ticketRegClose: "2024-12-31",
    status: EventStatus.Pending,
    location: 'Jakarta (Aula Simfoni)',
    organizier: {
      eoId: '15',
      name: 'Symphony World'
    },
    description: `
      Noah, one of Indonesia's top rock bands, is set to perform in Surabaya at the iconic Gelora Bung Tomo stadium. This concert is part of their highly anticipated national tour, showcasing their latest album alongside fan-favorite hits.

      Fans can expect a high-energy performance with stunning visuals and cutting-edge stage design. The band's charismatic frontman, Ariel, will lead the audience through an unforgettable evening of music and emotion.

      The venue, Gelora Bung Tomo, is known for hosting major events and offers excellent facilities for concert-goers. Attendees are encouraged to arrive early to enjoy the pre-show atmosphere.

      Langit Musik, the event organizer, is known for delivering exceptional live music experiences. Their collaboration with Noah ensures that every detail of the concert is carefully planned.

      With limited tickets remaining, this is your chance to witness Noah's electrifying live performance. Don't miss out on a night that will leave you wanting more.
    `
  },
  {
    eventId: '5o6p7q8r-5234-3456-7890-123456782',
    orgId: "1",
    name: 'Festival EDM Jakarta',
    dateStart: '15 - 16 Dec 25',
    dateEnd: '15 - 16 Dec 25',
    ticketPrice: '750,000',
    ticketAmount: 8,
    ticketRegOpen: "2024-12-12",
    ticketRegClose: "2024-12-31",
    status: EventStatus.Pending,
    location: 'Jakarta (Ancol)',
    organizier: {
      eoId: '16',
      name: 'Beat Nation'
    },
    description: `
      Noah, one of Indonesia's top rock bands, is set to perform in Surabaya at the iconic Gelora Bung Tomo stadium. This concert is part of their highly anticipated national tour, showcasing their latest album alongside fan-favorite hits.

      Fans can expect a high-energy performance with stunning visuals and cutting-edge stage design. The band's charismatic frontman, Ariel, will lead the audience through an unforgettable evening of music and emotion.

      The venue, Gelora Bung Tomo, is known for hosting major events and offers excellent facilities for concert-goers. Attendees are encouraged to arrive early to enjoy the pre-show atmosphere.

      Langit Musik, the event organizer, is known for delivering exceptional live music experiences. Their collaboration with Noah ensures that every detail of the concert is carefully planned.

      With limited tickets remaining, this is your chance to witness Noah's electrifying live performance. Don't miss out on a night that will leave you wanting more.
    `
  }
];


export default items;