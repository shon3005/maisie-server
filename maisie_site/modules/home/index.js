import Header from '../../shared/components/app_header/index.js';
import FeaturedRow from '../landing/components/featuredrow.js';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag'

const UPLOAD_FILE = gql`
  mutation createCircle($file: Upload!) {
    createCircle(file: $file)
  }
`

const handleCreateCircle = async (file, createCircle) => {
  try {
    const response = await createCircle({
      variables: {
        file
      },
    });
    console.log(response);
  } catch(e) {

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
    <Mutation mutation={UPLOAD_FILE}>
      {createCircle => (
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
