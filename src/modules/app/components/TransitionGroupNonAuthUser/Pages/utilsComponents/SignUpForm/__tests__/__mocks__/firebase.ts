
export const mockPlaySoundFile = jest.fn();

const mock = jest.fn().mockImplementation(() => {
  return {playSoundFile: mockPlaySoundFile};
});