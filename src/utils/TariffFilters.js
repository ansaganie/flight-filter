import TariffFilterTypes from '../GlobalConstants';

const TariffFilters = {
  [TariffFilterTypes.Direct]: flight => flight.itineraries[0][0].stops === 0,
  [TariffFilterTypes.Refundable]: flight => flight.itineraries[0][0].refundable,
  [TariffFilterTypes.WithBaggage]: flight => !flight.services['0PC'],
};

export default TariffFilters;
