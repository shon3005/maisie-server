import Header from '../../shared/components/app_header/index.js';
import FeaturedRow from '../landing/components/featuredrow.js';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag'
import axios from 'axios';

const mutation = gql`
  mutation createCircle(
                        $file: Upload!,
                        $day: String!,
                        $description: String!,
                        $duration: Int!,
                        $end: DateTime!,
                        $start: DateTime!,
                        $name: String!,
                        $price: Float!,
                        $spaceType: String!,
                        $programLength: Int!,
                        $location: String!,
                        $time: String!
  ) {
    createCircle(
                input: {
                  file: $file,
                  day: $day,
                  description: $description,
                  duration: $duration,
                  end: $end,
                  start: $start,
                  name: $name,
                  price: $price,
                  spaceType: $spaceType,
                  programLength: $programLength,
                  location: $location,
                  time: $time
                }
    ) {
      id
    }
  }
`

const onChange = async (e, uploadFile) => {
  const {
    currentTarget: { validity, files }
  } = e;
  var bodyFormData = new FormData();
  bodyFormData.append('image', files[0]);

  try {
    const response = await axios.post('http://localhost:8080/api/upload', bodyFormData, { headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJtYWlzaWVfYXBpIiwiZXhwIjoxNTUxMjkyNjAwLCJpYXQiOjE1NDg4NzM0MDAsImlzcyI6Im1haXNpZV9hcGkiLCJqdGkiOiJiYWM5MzMwYS1lODAwLTQyYjAtOWM0NC1kNTQxMTBjYmU2MDQiLCJuYmYiOjE1NDg4NzMzOTksInN1YiI6IjEwIiwidHlwIjoiYWNjZXNzIn0.4getw9Y02wtnhuno546yuijJ-Y5fTopCY1gDVaDQxLdp1H63AKaq2CL_BdKm4r8m5nNj7pATvv294hNfnTsv9A`
    }})
    console.log(response.data.success);
  } catch(e) {
    console.log(e.response.data.error);
  }
}

export default (props) =>
  <div className="discover col-fs-c">
    <Header />
    <div className="discover__content col-fs-c">
      <FeaturedRow />
    </div>

    {/*<span className="discover__content-title">Welcome to Maisie</span>
    <span className="discover__content-desc">Browse available Circles below</span>*/}
    <Mutation
      mutation={mutation}>
      {createCircle => {
        return <input type="file" onChange={e => onChange(e, createCircle)} />;
      }}
      {client => (
        <input
          type="file"
          required
          onChange={({
            target: {
              validity,
              files: [file]
            }
          }) => validity.valid && handleCreateCircle(file, createCircle)}
        />
      )}
    </Mutation>
  </div>
