export const options = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
    params: {
      bl_lat: '34.391297',
      bl_lng: '25.698739',
      tr_lat: '43.25524',
      tr_lng: '44.63651',
      limit: '300'
    },
    headers: {
      'x-rapidapi-key': '9691cc5db6mshc21dc434e16cfdep1313a3jsn4ac5cdbc02f3',
      'x-rapidapi-host': 'flight-radar1.p.rapidapi.com'
    }
  };


  export const detailOpt = {
    method: 'GET',
  url: 'https://flight-radar1.p.rapidapi.com/flights/detail',
  params: {flight: '3640be2e'},
  headers: {
    'x-rapidapi-key': '9691cc5db6mshc21dc434e16cfdep1313a3jsn4ac5cdbc02f3',
    'x-rapidapi-host': 'flight-radar1.p.rapidapi.com'
    }
  };
  