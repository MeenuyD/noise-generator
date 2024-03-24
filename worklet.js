class NoiseGenerator extends AudioWorkletProcessor {
    // The signal number
    process(inputs,outputs){
        for(let i=0;i<outputs.length;++i){
            outputs[0][0][i]=2*Math.random()-1;
        }
        // Must return true to keep the processor alive
        return true;
    }
};
registerProcessor('noise-generator', NoiseGenerator);