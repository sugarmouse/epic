import styled from 'styled-components'


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  background: #000000;
  overflow: hidden;
  .bounce{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: whitesmoke;
    height: 100%;
    white-space: nowrap;
  }
  .letter {
    animation: bounce 0.75s cubic-bezier(0.05, 0, 0.2, 1) infinite alternate;
    display: inline-block;
    transform: translate3d(0, 0, 0);
    margin-top: 0.5em;
    text-shadow: rgba(255, 255, 255, 0.4) 0 0 0.05em;
  }
  .letter:nth-child(1) {
    animation-delay: 0s;
  }
  .letter:nth-child(2) {
    animation-delay: 0.0333333333s;
  }
  .letter:nth-child(3) {
    animation-delay: 0.1333333333s;
  }
  .letter:nth-child(4) {
    animation-delay: 0.2333333333s;
  }
  .letter:nth-child(5) {
    animation-delay: 0.3333333333s;
  }
  .letter:nth-child(6) {
    animation-delay: 0.4333333333s;
  }
  .letter:nth-child(7) {
    animation-delay: 0.5333333333s;
  }
  .letter:nth-child(8) {
    animation-delay: 0.6333333333s;
  }
  .letter:nth-child(9) {
    animation-delay: 0.7333333333s;
  }
  .letter:nth-child(10) {
    animation-delay: 0.8333333333s;
  }
  .letter:nth-child(11) {
    animation-delay: 0.9333333333s;
  }

  @keyframes bounce {
    0% {
      transform: translate3d(0, 0, 0);
      text-shadow: rgba(255, 255, 255, 0.4) 0 0 0.05em;
    }
    100% {
      transform: translate3d(0, -1em, 0);
      text-shadow: rgba(255, 255, 255, 0.4) 0 1em 0.35em;
    }
  }
`
export const  BounceCharComponent = (props)=>{
  return (
    <Wrapper>
      <div className="bounce">
      {props.char.split('').map(
        item=> <span className="letter" key={item}>{item}</span>
      )}
      </div>
    </Wrapper>
  )
}







