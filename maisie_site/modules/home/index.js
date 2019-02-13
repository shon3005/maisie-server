import Header from '../../shared/components/header/index.js';
import Footer from '../../shared/components/footer.js';
import FeaturedRow from '../landing/components/featuredrow.js';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag'
import axios from 'axios';

const mutation = gql`
  mutation createCircle(
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

const onChange = async (e, createCircle) => {
  const {
    currentTarget: { validity, files }
  } = e;
  var bodyFormData = new FormData();
  bodyFormData.append('image', files[0]);

  try {
    if (validity.valid) {
      const response = await createCircle(
        {
          variables: {
            day: "Monday",
            description: "Hello World",
            duration: 60,
            end: "2018-05-17T12:11:06.3684072Z",
            start: "2018-05-17T12:11:06.3684072Z",
            name: "Sample Group",
            price: 45,
            spaceType: "organization",
            programLength: 12,
            location: "Williamsburg",
            time: "3:40"
          }
        }
      );
      bodyFormData.append('id', response.data.createCircle.id);
      const response2 = await axios.post('http://localhost:8080/api/upload', bodyFormData, { headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJtYWlzaWVfYXBpIiwiZXhwIjoxNTUxMzk4NTQxLCJpYXQiOjE1NDg5NzkzNDEsImlzcyI6Im1haXNpZV9hcGkiLCJqdGkiOiIwYmY0OTI0NS0xNGU5LTQwZjctOWIwOC0yOWQ4MmNhYmM0YjIiLCJuYmYiOjE1NDg5NzkzNDAsInN1YiI6IjEiLCJ0eXAiOiJhY2Nlc3MifQ.n3k4ZI8xlKuOS_LkO2aMPhH4728EsHxKpty8Hvg7WMyFv6BgOw9fpVWWO3Rgy6_tCWrWbKXJl81RMkYCfnXNdA`
      }});
    } else {
      console.log('not valid');
    }
  } catch(e) {
    console.log(e);
  }
}

export default (props) => {
  return (
    <div className="discover col-fs-c">
      <Header user={props.user} loggedIn={"loggedIn"}/>
      <div className="discover__content col-fs-c">
        <FeaturedRow />
      </div>
      <Mutation
        mutation={mutation}>
        {createCircle => {
          return <input type="file" onChange={e => onChange(e, createCircle)} />;
        }}
      </Mutation>
      <Footer />
    </div>
  );
}
