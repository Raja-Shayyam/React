import { Container } from "../components/container";
import Inputs from "../components/in-put";
import { Headings } from "../components/heading";

//import 'bootstrap/dist/css/bootstrap.min.css';

export default function App()
{

  return(
    <Container  >
      <Headings ></Headings>
      <Inputs></Inputs>
    </Container>

  );


}

/**
 *     <div class="container text-center">
  <div class="row">
    <div class="col-sm-12">col-sm-12</div>
  </div>
  <div class="row">
    <div class="col-sm">col-sm</div>
    <div class="col-sm">col-sm</div>
    <div class="col-sm">col-sm</div>
  </div>
</div>
 */