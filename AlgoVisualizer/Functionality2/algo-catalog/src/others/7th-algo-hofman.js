import Delayed from '../delayed';
export function seventhOtherhofman() {
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
    <h1>HUFFMAN ALGORITHM</h1>
    <p>Huffman coding is a lossless data compression algorithm.</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>In computer science, the time complexity is the computational complexity that describes the amount of computer time it takes to run an algorithm. Time complexity is commonly estimated by counting the number of elementary operations performed by the algorithm, supposing that each elementary operation takes a fixed amount of time to perform. Thus, the amount of time taken and the number of elementary operations performed by the algorithm are taken to differ by at most a constant factor.</p>
      <p>BEST::O(nlogn) where n is the number of node</p>
     <p>WORST::O(n) where n is the number of node</p>
    <p>AVERAGE::O(nlogn) where n is the number of node</p>           
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>Space Complexity of an algorithm is total space taken by the algorithm with respect to the input size. Space complexity includes both Auxiliary space and space used by input. </p>
      <p>Space complexity is a parallel concept to time complexity. If we need to create an array of size n, this will require O(n) space. If we create a two dimensional array of size n*n, this will require O(n2) space.</p>
    <p>AVERAGE::O(n) where n is the number of node</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>DEFINATION</u></h3>        
      <p>In computer science and information theory, a Huffman code is a particular type of optimal prefix code that is commonly used for lossless data compression.</p>
      <p>The idea is to assign variable-length codes to input characters, lengths of the assigned codes are based on the frequencies of corresponding characters.</p>
      <p>The most frequent character gets the smallest code and the least frequent character gets the largest code.</p>
    </div>
  </div>
</div></Delayed>  
</section>
    );
}
export default seventhOtherhofman;