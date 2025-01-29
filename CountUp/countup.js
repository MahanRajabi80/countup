<CountUp
start={-875.039}
end={160527.012}
duration={2.75}
separator=" "
decimals=" "
decimal=" "
prefix="EUR "
suffix=" left"
onEnd={()=> console.log('Ended!')}
onstart={() =>
    console.log('started!')}
>
    {({ CountUpRef, start }) => (
        <div>
            <span ref={countupref} />
            <button onClick={start}>start</button>
        </div>
    )}
</CountUp>