const { ReplayRecorder, GhostPlayer } = require('../js/ghost_replay.js');

describe('Ghost Replay & Speedrun Recording System', () => {
    let recorder;

    beforeEach(() => {
        recorder = new ReplayRecorder();
    });

    test('initializes with empty frames', () => {
        expect(recorder.frames.length).toBe(0);
        expect(recorder.isRecording).toBe(false);
    });

    test('records player state frames', () => {
        recorder.start(1);
        const mockPlayer = { x: 100, y: 200, facing: 1, squashX: 1, squashY: 1, isGliding: false, skin: 'froggy' };

        recorder.recordFrame(mockPlayer);
        mockPlayer.x = 105;
        recorder.recordFrame(mockPlayer);

        expect(recorder.frames.length).toBe(2);
        expect(recorder.frames[0].x).toBe(100);
        expect(recorder.frames[1].x).toBe(105);
    });

    test('exports and imports JSON replay data', () => {
        recorder.start(2);
        recorder.recordFrame({ x: 50, y: 60, facing: -1, squashX: 1, squashY: 1 });
        const json = recorder.exportJSON();

        const newRecorder = new ReplayRecorder();
        const success = newRecorder.importJSON(json);

        expect(success).toBe(true);
        expect(newRecorder.levelId).toBe(2);
        expect(newRecorder.frames.length).toBe(1);
    });

    test('GhostPlayer advances frame index and finishes playback', () => {
        const frames = [{ x: 10, y: 20 }, { x: 15, y: 25 }];
        const ghost = new GhostPlayer(frames);

        expect(ghost.getCurrentState().x).toBe(10);
        ghost.update();
        expect(ghost.getCurrentState().x).toBe(15);
        expect(ghost.isFinished).toBe(false);
        ghost.update();
        expect(ghost.isFinished).toBe(true);
    });
});
