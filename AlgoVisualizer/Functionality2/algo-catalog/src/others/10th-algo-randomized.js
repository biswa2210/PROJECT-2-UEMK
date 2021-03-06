import Delayed from '../delayed';
export function tenthOtherrandomized() {
    /*
CREATED BY BISWARUP BHATTACHARJEE
EMAIL    : bbiswa471@gmail.com
PHONE NO : 6290272740
*/
    return (
      <section>
            <div class="routeloader">
            <div class="coder-logo-animation">
              <div class="left">
                <div class="part-1"></div>
                <div class="part-2"></div>
                <div class="part-3"></div>
              </div>
              <div class="right">
                <div class="part-1"></div>
                <div class="part-2"></div>
                <div class="part-3"></div>
              </div>
            </div>
          </div>
        <Delayed waitBeforeShow={2000}>
<div class="container">
  <div class="jumbotron">
    <h1>RANDOMIZED ALGORITHM</h1>
    <p>A randomized algorithm is an algorithm that employs a degree of randomness as part of its logic. </p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>In computer science, the time complexity is the computational complexity that describes the amount of computer time it takes to run an algorithm. Time complexity is commonly estimated by counting the number of elementary operations performed by the algorithm, supposing that each elementary operation takes a fixed amount of time to perform. Thus, the amount of time taken and the number of elementary operations performed by the algorithm are taken to differ by at most a constant factor.</p>
      <p>BEST::O(E)</p>
     <p>WORST::O(n Log n) where n is the number of nodes</p>
    <p>AVERAGE::O(E)</p>           
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>Space Complexity of an algorithm is total space taken by the algorithm with respect to the input size. Space complexity includes both Auxiliary space and space used by input. </p>
      <p>Space complexity is a parallel concept to time complexity. If we need to create an array of size n, this will require O(n) space. If we create a two dimensional array of size n*n, this will require O(n2) space.</p>
    <p>This randomness is used to reduce time complexity or space complexity in other standard algorithms</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>DEFINATION</u></h3>        
      <p>The algorithm typically uses uniformly random bits as an auxiliary input to guide its behavior. </p>
      <p>In the hope of achieving good performance in the "average case" over all possible choices of random determined by the random bits; thus either the running time, or the output (or both) are random variables.</p>
      <p>One has to distinguish between algorithms that use the random input so that they always terminate with the correct answer, but where the expected running time is finite  and algorithms which have a chance of producing an incorrect result </p>
    </div>
  </div>
</div></Delayed>
</section>
    );
}
export default tenthOtherrandomized;
