import '../App.css';


function Dog({ dogData }) {



  return <div className='body'>
    {dogData.map((dog, index) => {
      return <div key={index} className='instax-surround'>
        <img src={dog} />
        <form>
          <label>
            Give me a name
          </label>
          <input type="text" name="name" />
          <input className="button" type="submit" value="Submit" />
        </form>
      </div>
    })}
  </div>



}


export default Dog