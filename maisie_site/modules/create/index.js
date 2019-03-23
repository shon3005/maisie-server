import Footer from '../../shared/components/footer/index.js';
import Progress from './components/progressBar.js';
import Header from '../../shared/components/header/index.js';
import LargeText from '../../shared/components/text/largeText.js';
import SmallText from '../../shared/components/text/smallText.js';
import progressLogic from './utils/progressLogic.js';

import Router from 'next/router';

import SlideOne from './components/slide1.js';
import SlideTwo from './components/slide2.js';
import SlideThree from './components/slide3.js';
import SlideFour from './components/slide4.js';
import SlideFive from './components/slide5.js';

var classNames = require('classnames');

import { ApolloConsumer } from 'react-apollo';
import createCircle from '../../shared/services/create-circle';
import axios from 'axios';

class Create extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      slideToShow: 0,
      title: false,
      description: false,
      whoshouldjoin: false,
      image_url: "",
      tags: false,
      frequency: "",
      length: "",
      hour: "",
      minute: "",
      ampm: "",
      start_date: "",
      location_type: "",
      neighborhood: false,
      address: false,
      price: false,
      min: 0,
      max: 0,
      createCircleMessage: 'Submit'
    }
  }
  handleBackPress() {
    this.setState({ slideToShow: this.state.slideToShow === 0 ? 0 : this.state.slideToShow - 1 })
  }
  handleAddImage(e) {
    const {
      currentTarget: { files }
    } = e;
    var image_url = document.getElementById("create_slide1_imageupload").value;
    this.setState({image_url, image: files[0]});
  }
  async handleForwardPress(client) {
    if (this.state.slideToShow === 0) {
      var title = document.getElementById("title").value,
          image_url = this.state.image_url ? this.state.image_url : document.getElementById("create_slide1_imageupload").value,
          description = document.getElementById("description").value,
          whoshouldjoin = document.getElementById("whoshouldjoin").value,
          tags = document.getElementById("tags").value;
      !title.length ? this.setState({title: ""}) : this.setState({title: title });
      document.getElementById("create_slide1_imageupload").value ? document.getElementById("create_slide1_imageupload_label").classList.remove('red') : document.getElementById("create_slide1_imageupload_label").classList.add('red');
      !description.length ? this.setState({description: ""}) : this.setState({description: description });
      !whoshouldjoin.length ? this.setState({whoshouldjoin: ""}) : this.setState({whoshouldjoin: whoshouldjoin });
      !tags.length ? this.setState({tags: ""}) : this.setState({tags: tags });
      tags && whoshouldjoin && title.length && description.length && image_url ? this.setState({ slideToShow: this.state.slideToShow + 1 }) : null;
    } else if (this.state.slideToShow === 1) {
      var frequency = document.getElementById("frequency").value,
          length = document.getElementById("length").value,
          hour = document.getElementById("hour").value,
          minute = document.getElementById("minute").value,
          ampm = document.getElementById("ampm").value,
          start_date = document.getElementById("start_date").value;
      this.setState({
        frequency: frequency,
        length: length,
        hour: hour,
        minute: minute,
        ampm: ampm,
        start_date: new Date(start_date),
        slideToShow: this.state.slideToShow + 1,
      });
    } else if (this.state.slideToShow === 2) {
      var location_type = document.getElementById("location_type").value;
      var neighborhood = document.getElementById("neighborhood").value;
      var address = document.getElementById("address").value;
      !neighborhood.length ? this.setState({neighborhood: ""}) : this.setState({neighborhood: neighborhood });
      !address.length ? this.setState({address: ""}) : this.setState({address: address });
      neighborhood.length && address.length ? this.setState({location_type: location_type, slideToShow: this.state.slideToShow + 1 }) : null;
    } else if (this.state.slideToShow === 3) {
      var price = document.getElementById("price").value;
      var min = document.getElementById("min").value;
      var max = document.getElementById("max").value;
      !price.length || parseInt(price, 10) == false ? this.setState({price: 0}) : this.setState({price: price, min: min, max: max, slideToShow: this.state.slideToShow + 1 });
    } else if (this.state.slideToShow === 4) {
      document.getElementById("create_circle_message").classList.add("saving");
      this.setState({createCircleMessage: 'Submitting...' });
      const resp = await createCircle(client, {
        description: this.state.description,
        title: this.state.title,
        frequency: this.state.frequency,
        length: this.state.length,
        location_type: this.state.location_type,
        neighborhood: this.state.neighborhood,
        address: this.state.address,
        price: this.state.price,
        min: this.state.min,
        max: this.state.max,
        hour: this.state.hour,
        minute: this.state.minute,
        ampm: this.state.ampm,
        startDate: this.state.start_date,
        tags: this.state.tags,
        whoshouldjoin: this.state.whoshouldjoin,
        hostId: this.props.user.host.id
      });
      let bodyFormData = new FormData();
      bodyFormData.append('image', this.state.image);
      bodyFormData.append('id', resp.data.createCircle.id);
      bodyFormData.append('table', 'circle');
      try {
        await axios.post('/api/upload', bodyFormData, { headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${this.props.token}`
        }});
      } catch(e) {
        console.log(e);
      }
      document.getElementById("create_circle_message").classList.remove('saving');
      this.setState({slideToShow: this.state.slideToShow + 1, createCircleMessage: 'Submit'});
    }
  }
  render() {
    const slideToShow = () => {
      if (this.state.slideToShow == 0) { return(
        <SlideOne
          title={this.state.title}
          description={this.state.description}
          image={this.state.image_url}
          addedImage={this.handleAddImage.bind(this)}
          user={this.props.user}
          whoshouldjoin={this.state.whoshouldjoin}
          tags={this.state.tags}
        /> )}
      else if (this.state.slideToShow == 1) { return(
        <SlideTwo
          frequency={this.state.frequency}
          length={this.state.length}
          hour={this.state.hour}
          minute={this.state.minute}
          ampm={this.state.ampm}
          start_date={this.state.start_date}
        /> )}
      else if (this.state.slideToShow == 2) { return(
        <SlideThree
          location_type={this.state.location_type}
          neighborhood={this.state.neighborhood}
          address={this.state.address}
        /> )}
      else if (this.state.slideToShow == 3) { return(
        <SlideFour
          price={this.state.price}
          min={this.state.min}
          max={this.state.max}
        /> )}
      else if (this.state.slideToShow == 4) { return(
        <SlideFive
          title={this.state.title}
          description={this.state.description}
          frequency={this.state.frequency}
          length={this.state.length}
          hour={this.state.hour}
          minute={this.state.minute}
          ampm={this.state.ampm}
          location_type={this.state.location_type}
          neighborhood={this.state.neighborhood}
          address={this.state.address}
          price={this.state.price}
          min={this.state.min}
          start_date={this.state.start_date.toLocaleDateString()}
        /> )}
      else if (this.state.slideToShow == 5) {
        return(
          <div className="col-c-c" style={{height: "100%", width: "100%"}}>
            <LargeText>Thank you for submitting!</LargeText>
            <SmallText>We'll get in touch soon</SmallText>
          </div>
        )
      }
    }
    return(
      <div className="create col-fs-c">
        <Header status={progressLogic[this.state.slideToShow]["msg"]} />
        <Progress status={progressLogic[this.state.slideToShow]["percent"]} />
        <div className="create__inner col-fs-c">
          {slideToShow()}
        </div>
        <div className="create__inner_brow row-sa-c">
          <div className={classNames(["back", {"fade": this.state.slideToShow === 0, "no_display": this.state.slideToShow === 5}])} onClick={this.handleBackPress.bind(this)}>Back</div>
          <ApolloConsumer>
            {(client) => (
              <div id="create_circle_message" className={classNames(["next", {"no_display": this.state.slideToShow === 5}])} onClick={this.handleForwardPress.bind(this, client)}>
                {
                  this.state.slideToShow < 4 ? "Next" : this.state.createCircleMessage
                }
              </div>
            )}
          </ApolloConsumer>
          <div className={classNames(["next", {"no_display": this.state.slideToShow != 5}])} onClick={() => Router.push('/panel/circles')}>Finish</div>
        </div>
      </div>
    )
  }
}

export default Create;
