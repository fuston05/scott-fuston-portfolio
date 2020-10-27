<!-- Modal Video Player README -->

## Info
- Built with React
- Styled with node-sass

## Use
- info will go here about how to add this component to a react project.
- pass video 'url' into VideoModalContainer '/videos/videoname.mp4'

- move this function up to your parent component and pass in as props or create your own function to handle opening the modal. It's also used when the 'X' (close) button is clicked inside the modal.
  ```
  const toggleModal = (e) => {
    console.log('toggled: ', visible)
    setVisible(!visible);
  }
  ```

## Modal Container Component
- takes a url as prop string

## video Player Component
- video files must be the following file formats: .mp4, .ogg, .webm.
- video files must be stored in the 'public' directory in a 'videos' folder.

## Testing
- Test are written using react-testing-library and jest