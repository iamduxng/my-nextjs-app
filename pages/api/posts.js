import mockData from './mockData';

export default (req, res) => {
  res.status(200).json(mockData)
}