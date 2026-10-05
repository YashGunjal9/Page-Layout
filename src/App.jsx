import Layout from './Components/Layout'

const App = () => {
  return (
    <div>
      {/* Homepage layout */}

      <Layout title="Welcome Page">
        <h1>Welcome to ReactJS</h1>

        <p>This is a simple React project to demonstrate basic layout concepts.</p>

        <p>You can use this as a starting point for your own projects.</p>
      </Layout>

      {/* Services layout */}
      
      <layout title="Services">
        <h2>Our Services</h2>
        <hr/>

        <ul>
          <li>Full Stack Web Development</li>
          <li>Artificial Intelligence</li>
          <li>Cloud Computing</li>
        </ul>
        
        {/* Footer */}
            <footer>
                &copy; All Rights Reserved. AstreTech Pvt.Ltd
        </footer>
        
      </layout> 
      
    </div>
  );
};

export default App


//* ==== Event Types ====

// onClick - When user clicks



// onChange - when input value changes



// onMouseOver - when mouse hovers 


// onSubmit - when a form is submitted


