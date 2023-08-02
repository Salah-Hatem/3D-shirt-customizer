import CustomButton from "./CustomButton";

const AiPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        className="aipicker-textarea"
        placeholder="Get an AI generated image..."
        value={prompt}
        onChange={(e) => {
          setPrompt(e.target.value);
        }}
        name=" "
        id=""
        cols="30"
        rows="10"
      />
      <div className="flex flex-wrap gap-3 ">
        {generatingImg ? (
          <h4> Generating...</h4>
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              customStyles="text-xs"
              handleClick={() => handleSubmit("logo")}
            />
            <CustomButton
              type="filled"
              title="AI Full"
              customStyles="text-xs"
              handleClick={() => handleSubmit("full")}
            />
          </>
        )}
      </div>
    </div>
  );
};
export default AiPicker;
