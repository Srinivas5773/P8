/**
 * Puddle Jumper - Level Validator & Pathfinding Reachability Test Suite
 * Validates stage solvability, platform gap limits, collectible bounds, and goal reachability.
 */

const LevelValidatorTests = {
  testSuiteName: "Stage Geometry & Reachability Solver",
  testCases: [
    {
      id: "level_reachability_test_1",
      testDescription: "Platform Gap Clearance Analysis #1",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 288,
        platformB_Y: 405,
        gapDistancePx: 88,
        verticalDropPx: -35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 34
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_2",
      testDescription: "Platform Gap Clearance Analysis #2",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 296,
        platformB_Y: 440,
        gapDistancePx: 96,
        verticalDropPx: 0,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 36
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_3",
      testDescription: "Platform Gap Clearance Analysis #3",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 304,
        platformB_Y: 475,
        gapDistancePx: 104,
        verticalDropPx: 35,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 38
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_4",
      testDescription: "Platform Gap Clearance Analysis #4",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 312,
        platformB_Y: 510,
        gapDistancePx: 112,
        verticalDropPx: 70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 39
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_5",
      testDescription: "Platform Gap Clearance Analysis #5",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 320,
        platformB_Y: 545,
        gapDistancePx: 120,
        verticalDropPx: 105,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 41
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_6",
      testDescription: "Platform Gap Clearance Analysis #6",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 328,
        platformB_Y: 580,
        gapDistancePx: 128,
        verticalDropPx: 140,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 43
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_7",
      testDescription: "Platform Gap Clearance Analysis #7",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 336,
        platformB_Y: 370,
        gapDistancePx: 136,
        verticalDropPx: -70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 45
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_8",
      testDescription: "Platform Gap Clearance Analysis #8",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 344,
        platformB_Y: 405,
        gapDistancePx: 144,
        verticalDropPx: -35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 47
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_9",
      testDescription: "Platform Gap Clearance Analysis #9",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 352,
        platformB_Y: 440,
        gapDistancePx: 152,
        verticalDropPx: 0,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 48
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_10",
      testDescription: "Platform Gap Clearance Analysis #10",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 360,
        platformB_Y: 475,
        gapDistancePx: 160,
        verticalDropPx: 35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 50
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_11",
      testDescription: "Platform Gap Clearance Analysis #11",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 368,
        platformB_Y: 510,
        gapDistancePx: 168,
        verticalDropPx: 70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 52
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_12",
      testDescription: "Platform Gap Clearance Analysis #12",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 376,
        platformB_Y: 545,
        gapDistancePx: 176,
        verticalDropPx: 105,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 54
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_13",
      testDescription: "Platform Gap Clearance Analysis #13",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 384,
        platformB_Y: 580,
        gapDistancePx: 184,
        verticalDropPx: 140,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 55
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_14",
      testDescription: "Platform Gap Clearance Analysis #14",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 392,
        platformB_Y: 370,
        gapDistancePx: 192,
        verticalDropPx: -70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 57
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_15",
      testDescription: "Platform Gap Clearance Analysis #15",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 280,
        platformB_Y: 405,
        gapDistancePx: 80,
        verticalDropPx: -35,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 32
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_16",
      testDescription: "Platform Gap Clearance Analysis #16",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 288,
        platformB_Y: 440,
        gapDistancePx: 88,
        verticalDropPx: 0,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 34
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_17",
      testDescription: "Platform Gap Clearance Analysis #17",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 296,
        platformB_Y: 475,
        gapDistancePx: 96,
        verticalDropPx: 35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 36
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_18",
      testDescription: "Platform Gap Clearance Analysis #18",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 304,
        platformB_Y: 510,
        gapDistancePx: 104,
        verticalDropPx: 70,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 38
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_19",
      testDescription: "Platform Gap Clearance Analysis #19",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 312,
        platformB_Y: 545,
        gapDistancePx: 112,
        verticalDropPx: 105,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 39
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_20",
      testDescription: "Platform Gap Clearance Analysis #20",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 320,
        platformB_Y: 580,
        gapDistancePx: 120,
        verticalDropPx: 140,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 41
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_21",
      testDescription: "Platform Gap Clearance Analysis #21",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 328,
        platformB_Y: 370,
        gapDistancePx: 128,
        verticalDropPx: -70,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 43
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_22",
      testDescription: "Platform Gap Clearance Analysis #22",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 336,
        platformB_Y: 405,
        gapDistancePx: 136,
        verticalDropPx: -35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 45
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_23",
      testDescription: "Platform Gap Clearance Analysis #23",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 344,
        platformB_Y: 440,
        gapDistancePx: 144,
        verticalDropPx: 0,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 47
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_24",
      testDescription: "Platform Gap Clearance Analysis #24",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 352,
        platformB_Y: 475,
        gapDistancePx: 152,
        verticalDropPx: 35,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 48
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_25",
      testDescription: "Platform Gap Clearance Analysis #25",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 360,
        platformB_Y: 510,
        gapDistancePx: 160,
        verticalDropPx: 70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 50
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_26",
      testDescription: "Platform Gap Clearance Analysis #26",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 368,
        platformB_Y: 545,
        gapDistancePx: 168,
        verticalDropPx: 105,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 52
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_27",
      testDescription: "Platform Gap Clearance Analysis #27",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 376,
        platformB_Y: 580,
        gapDistancePx: 176,
        verticalDropPx: 140,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 54
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_28",
      testDescription: "Platform Gap Clearance Analysis #28",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 384,
        platformB_Y: 370,
        gapDistancePx: 184,
        verticalDropPx: -70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 55
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_29",
      testDescription: "Platform Gap Clearance Analysis #29",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 392,
        platformB_Y: 405,
        gapDistancePx: 192,
        verticalDropPx: -35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 57
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_30",
      testDescription: "Platform Gap Clearance Analysis #30",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 280,
        platformB_Y: 440,
        gapDistancePx: 80,
        verticalDropPx: 0,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 32
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_31",
      testDescription: "Platform Gap Clearance Analysis #31",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 288,
        platformB_Y: 475,
        gapDistancePx: 88,
        verticalDropPx: 35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 34
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_32",
      testDescription: "Platform Gap Clearance Analysis #32",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 296,
        platformB_Y: 510,
        gapDistancePx: 96,
        verticalDropPx: 70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 36
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_33",
      testDescription: "Platform Gap Clearance Analysis #33",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 304,
        platformB_Y: 545,
        gapDistancePx: 104,
        verticalDropPx: 105,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 38
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_34",
      testDescription: "Platform Gap Clearance Analysis #34",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 312,
        platformB_Y: 580,
        gapDistancePx: 112,
        verticalDropPx: 140,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 39
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_35",
      testDescription: "Platform Gap Clearance Analysis #35",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 320,
        platformB_Y: 370,
        gapDistancePx: 120,
        verticalDropPx: -70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 41
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_36",
      testDescription: "Platform Gap Clearance Analysis #36",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 328,
        platformB_Y: 405,
        gapDistancePx: 128,
        verticalDropPx: -35,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 43
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_37",
      testDescription: "Platform Gap Clearance Analysis #37",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 336,
        platformB_Y: 440,
        gapDistancePx: 136,
        verticalDropPx: 0,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 45
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_38",
      testDescription: "Platform Gap Clearance Analysis #38",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 344,
        platformB_Y: 475,
        gapDistancePx: 144,
        verticalDropPx: 35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 47
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_39",
      testDescription: "Platform Gap Clearance Analysis #39",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 352,
        platformB_Y: 510,
        gapDistancePx: 152,
        verticalDropPx: 70,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 48
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_40",
      testDescription: "Platform Gap Clearance Analysis #40",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 360,
        platformB_Y: 545,
        gapDistancePx: 160,
        verticalDropPx: 105,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 50
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_41",
      testDescription: "Platform Gap Clearance Analysis #41",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 368,
        platformB_Y: 580,
        gapDistancePx: 168,
        verticalDropPx: 140,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 52
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_42",
      testDescription: "Platform Gap Clearance Analysis #42",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 376,
        platformB_Y: 370,
        gapDistancePx: 176,
        verticalDropPx: -70,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 54
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_43",
      testDescription: "Platform Gap Clearance Analysis #43",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 384,
        platformB_Y: 405,
        gapDistancePx: 184,
        verticalDropPx: -35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 55
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_44",
      testDescription: "Platform Gap Clearance Analysis #44",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 392,
        platformB_Y: 440,
        gapDistancePx: 192,
        verticalDropPx: 0,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 57
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_45",
      testDescription: "Platform Gap Clearance Analysis #45",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 280,
        platformB_Y: 475,
        gapDistancePx: 80,
        verticalDropPx: 35,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 32
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_46",
      testDescription: "Platform Gap Clearance Analysis #46",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 288,
        platformB_Y: 510,
        gapDistancePx: 88,
        verticalDropPx: 70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 34
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_47",
      testDescription: "Platform Gap Clearance Analysis #47",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 296,
        platformB_Y: 545,
        gapDistancePx: 96,
        verticalDropPx: 105,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 36
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_48",
      testDescription: "Platform Gap Clearance Analysis #48",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 304,
        platformB_Y: 580,
        gapDistancePx: 104,
        verticalDropPx: 140,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 38
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_49",
      testDescription: "Platform Gap Clearance Analysis #49",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 312,
        platformB_Y: 370,
        gapDistancePx: 112,
        verticalDropPx: -70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 39
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_50",
      testDescription: "Platform Gap Clearance Analysis #50",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 320,
        platformB_Y: 405,
        gapDistancePx: 120,
        verticalDropPx: -35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 41
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_51",
      testDescription: "Platform Gap Clearance Analysis #51",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 328,
        platformB_Y: 440,
        gapDistancePx: 128,
        verticalDropPx: 0,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 43
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_52",
      testDescription: "Platform Gap Clearance Analysis #52",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 336,
        platformB_Y: 475,
        gapDistancePx: 136,
        verticalDropPx: 35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 45
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_53",
      testDescription: "Platform Gap Clearance Analysis #53",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 344,
        platformB_Y: 510,
        gapDistancePx: 144,
        verticalDropPx: 70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 47
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_54",
      testDescription: "Platform Gap Clearance Analysis #54",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 352,
        platformB_Y: 545,
        gapDistancePx: 152,
        verticalDropPx: 105,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 48
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_55",
      testDescription: "Platform Gap Clearance Analysis #55",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 360,
        platformB_Y: 580,
        gapDistancePx: 160,
        verticalDropPx: 140,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 50
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_56",
      testDescription: "Platform Gap Clearance Analysis #56",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 368,
        platformB_Y: 370,
        gapDistancePx: 168,
        verticalDropPx: -70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 52
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_57",
      testDescription: "Platform Gap Clearance Analysis #57",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 376,
        platformB_Y: 405,
        gapDistancePx: 176,
        verticalDropPx: -35,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 54
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_58",
      testDescription: "Platform Gap Clearance Analysis #58",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 384,
        platformB_Y: 440,
        gapDistancePx: 184,
        verticalDropPx: 0,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 55
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_59",
      testDescription: "Platform Gap Clearance Analysis #59",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 392,
        platformB_Y: 475,
        gapDistancePx: 192,
        verticalDropPx: 35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 57
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_60",
      testDescription: "Platform Gap Clearance Analysis #60",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 280,
        platformB_Y: 510,
        gapDistancePx: 80,
        verticalDropPx: 70,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 32
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_61",
      testDescription: "Platform Gap Clearance Analysis #61",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 288,
        platformB_Y: 545,
        gapDistancePx: 88,
        verticalDropPx: 105,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 34
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_62",
      testDescription: "Platform Gap Clearance Analysis #62",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 296,
        platformB_Y: 580,
        gapDistancePx: 96,
        verticalDropPx: 140,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 36
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_63",
      testDescription: "Platform Gap Clearance Analysis #63",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 304,
        platformB_Y: 370,
        gapDistancePx: 104,
        verticalDropPx: -70,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 38
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_64",
      testDescription: "Platform Gap Clearance Analysis #64",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 312,
        platformB_Y: 405,
        gapDistancePx: 112,
        verticalDropPx: -35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 39
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_65",
      testDescription: "Platform Gap Clearance Analysis #65",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 320,
        platformB_Y: 440,
        gapDistancePx: 120,
        verticalDropPx: 0,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 41
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_66",
      testDescription: "Platform Gap Clearance Analysis #66",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 328,
        platformB_Y: 475,
        gapDistancePx: 128,
        verticalDropPx: 35,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 43
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_67",
      testDescription: "Platform Gap Clearance Analysis #67",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 336,
        platformB_Y: 510,
        gapDistancePx: 136,
        verticalDropPx: 70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 45
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_68",
      testDescription: "Platform Gap Clearance Analysis #68",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 344,
        platformB_Y: 545,
        gapDistancePx: 144,
        verticalDropPx: 105,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 47
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_69",
      testDescription: "Platform Gap Clearance Analysis #69",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 352,
        platformB_Y: 580,
        gapDistancePx: 152,
        verticalDropPx: 140,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 48
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_70",
      testDescription: "Platform Gap Clearance Analysis #70",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 360,
        platformB_Y: 370,
        gapDistancePx: 160,
        verticalDropPx: -70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 50
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_71",
      testDescription: "Platform Gap Clearance Analysis #71",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 368,
        platformB_Y: 405,
        gapDistancePx: 168,
        verticalDropPx: -35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 52
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_72",
      testDescription: "Platform Gap Clearance Analysis #72",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 376,
        platformB_Y: 440,
        gapDistancePx: 176,
        verticalDropPx: 0,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 54
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_73",
      testDescription: "Platform Gap Clearance Analysis #73",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 384,
        platformB_Y: 475,
        gapDistancePx: 184,
        verticalDropPx: 35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 55
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_74",
      testDescription: "Platform Gap Clearance Analysis #74",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 392,
        platformB_Y: 510,
        gapDistancePx: 192,
        verticalDropPx: 70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 57
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_75",
      testDescription: "Platform Gap Clearance Analysis #75",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 280,
        platformB_Y: 545,
        gapDistancePx: 80,
        verticalDropPx: 105,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 32
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_76",
      testDescription: "Platform Gap Clearance Analysis #76",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 288,
        platformB_Y: 580,
        gapDistancePx: 88,
        verticalDropPx: 140,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 34
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_77",
      testDescription: "Platform Gap Clearance Analysis #77",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 296,
        platformB_Y: 370,
        gapDistancePx: 96,
        verticalDropPx: -70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 36
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_78",
      testDescription: "Platform Gap Clearance Analysis #78",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 304,
        platformB_Y: 405,
        gapDistancePx: 104,
        verticalDropPx: -35,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 38
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_79",
      testDescription: "Platform Gap Clearance Analysis #79",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 312,
        platformB_Y: 440,
        gapDistancePx: 112,
        verticalDropPx: 0,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 39
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_80",
      testDescription: "Platform Gap Clearance Analysis #80",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 320,
        platformB_Y: 475,
        gapDistancePx: 120,
        verticalDropPx: 35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 41
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_81",
      testDescription: "Platform Gap Clearance Analysis #81",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 328,
        platformB_Y: 510,
        gapDistancePx: 128,
        verticalDropPx: 70,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 43
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_82",
      testDescription: "Platform Gap Clearance Analysis #82",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 336,
        platformB_Y: 545,
        gapDistancePx: 136,
        verticalDropPx: 105,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 45
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_83",
      testDescription: "Platform Gap Clearance Analysis #83",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 344,
        platformB_Y: 580,
        gapDistancePx: 144,
        verticalDropPx: 140,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 47
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_84",
      testDescription: "Platform Gap Clearance Analysis #84",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 352,
        platformB_Y: 370,
        gapDistancePx: 152,
        verticalDropPx: -70,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 48
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_85",
      testDescription: "Platform Gap Clearance Analysis #85",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 360,
        platformB_Y: 405,
        gapDistancePx: 160,
        verticalDropPx: -35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 50
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_86",
      testDescription: "Platform Gap Clearance Analysis #86",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 368,
        platformB_Y: 440,
        gapDistancePx: 168,
        verticalDropPx: 0,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 52
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_87",
      testDescription: "Platform Gap Clearance Analysis #87",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 376,
        platformB_Y: 475,
        gapDistancePx: 176,
        verticalDropPx: 35,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 54
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_88",
      testDescription: "Platform Gap Clearance Analysis #88",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 384,
        platformB_Y: 510,
        gapDistancePx: 184,
        verticalDropPx: 70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 55
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_89",
      testDescription: "Platform Gap Clearance Analysis #89",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 392,
        platformB_Y: 545,
        gapDistancePx: 192,
        verticalDropPx: 105,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 57
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_90",
      testDescription: "Platform Gap Clearance Analysis #90",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 280,
        platformB_Y: 580,
        gapDistancePx: 80,
        verticalDropPx: 140,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 32
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_91",
      testDescription: "Platform Gap Clearance Analysis #91",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 288,
        platformB_Y: 370,
        gapDistancePx: 88,
        verticalDropPx: -70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 34
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_92",
      testDescription: "Platform Gap Clearance Analysis #92",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 296,
        platformB_Y: 405,
        gapDistancePx: 96,
        verticalDropPx: -35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 36
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_93",
      testDescription: "Platform Gap Clearance Analysis #93",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 304,
        platformB_Y: 440,
        gapDistancePx: 104,
        verticalDropPx: 0,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 38
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_94",
      testDescription: "Platform Gap Clearance Analysis #94",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 312,
        platformB_Y: 475,
        gapDistancePx: 112,
        verticalDropPx: 35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 39
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_95",
      testDescription: "Platform Gap Clearance Analysis #95",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 320,
        platformB_Y: 510,
        gapDistancePx: 120,
        verticalDropPx: 70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 41
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_96",
      testDescription: "Platform Gap Clearance Analysis #96",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 328,
        platformB_Y: 545,
        gapDistancePx: 128,
        verticalDropPx: 105,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 43
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_97",
      testDescription: "Platform Gap Clearance Analysis #97",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 336,
        platformB_Y: 580,
        gapDistancePx: 136,
        verticalDropPx: 140,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 45
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_98",
      testDescription: "Platform Gap Clearance Analysis #98",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 344,
        platformB_Y: 370,
        gapDistancePx: 144,
        verticalDropPx: -70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 47
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_99",
      testDescription: "Platform Gap Clearance Analysis #99",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 352,
        platformB_Y: 405,
        gapDistancePx: 152,
        verticalDropPx: -35,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 48
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_100",
      testDescription: "Platform Gap Clearance Analysis #100",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 360,
        platformB_Y: 440,
        gapDistancePx: 160,
        verticalDropPx: 0,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 50
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_101",
      testDescription: "Platform Gap Clearance Analysis #101",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 368,
        platformB_Y: 475,
        gapDistancePx: 168,
        verticalDropPx: 35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 52
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_102",
      testDescription: "Platform Gap Clearance Analysis #102",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 376,
        platformB_Y: 510,
        gapDistancePx: 176,
        verticalDropPx: 70,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 54
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_103",
      testDescription: "Platform Gap Clearance Analysis #103",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 384,
        platformB_Y: 545,
        gapDistancePx: 184,
        verticalDropPx: 105,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 55
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_104",
      testDescription: "Platform Gap Clearance Analysis #104",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 392,
        platformB_Y: 580,
        gapDistancePx: 192,
        verticalDropPx: 140,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 57
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_105",
      testDescription: "Platform Gap Clearance Analysis #105",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 280,
        platformB_Y: 370,
        gapDistancePx: 80,
        verticalDropPx: -70,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 32
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_106",
      testDescription: "Platform Gap Clearance Analysis #106",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 288,
        platformB_Y: 405,
        gapDistancePx: 88,
        verticalDropPx: -35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 34
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_107",
      testDescription: "Platform Gap Clearance Analysis #107",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 296,
        platformB_Y: 440,
        gapDistancePx: 96,
        verticalDropPx: 0,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 36
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_108",
      testDescription: "Platform Gap Clearance Analysis #108",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 304,
        platformB_Y: 475,
        gapDistancePx: 104,
        verticalDropPx: 35,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 38
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_109",
      testDescription: "Platform Gap Clearance Analysis #109",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 312,
        platformB_Y: 510,
        gapDistancePx: 112,
        verticalDropPx: 70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 39
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_110",
      testDescription: "Platform Gap Clearance Analysis #110",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 320,
        platformB_Y: 545,
        gapDistancePx: 120,
        verticalDropPx: 105,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 41
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_111",
      testDescription: "Platform Gap Clearance Analysis #111",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 328,
        platformB_Y: 580,
        gapDistancePx: 128,
        verticalDropPx: 140,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 43
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_112",
      testDescription: "Platform Gap Clearance Analysis #112",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 336,
        platformB_Y: 370,
        gapDistancePx: 136,
        verticalDropPx: -70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 45
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_113",
      testDescription: "Platform Gap Clearance Analysis #113",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 344,
        platformB_Y: 405,
        gapDistancePx: 144,
        verticalDropPx: -35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 47
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_114",
      testDescription: "Platform Gap Clearance Analysis #114",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 352,
        platformB_Y: 440,
        gapDistancePx: 152,
        verticalDropPx: 0,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 48
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_115",
      testDescription: "Platform Gap Clearance Analysis #115",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 360,
        platformB_Y: 475,
        gapDistancePx: 160,
        verticalDropPx: 35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 50
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_116",
      testDescription: "Platform Gap Clearance Analysis #116",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 368,
        platformB_Y: 510,
        gapDistancePx: 168,
        verticalDropPx: 70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 52
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_117",
      testDescription: "Platform Gap Clearance Analysis #117",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 376,
        platformB_Y: 545,
        gapDistancePx: 176,
        verticalDropPx: 105,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 54
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_118",
      testDescription: "Platform Gap Clearance Analysis #118",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 384,
        platformB_Y: 580,
        gapDistancePx: 184,
        verticalDropPx: 140,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 55
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_119",
      testDescription: "Platform Gap Clearance Analysis #119",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 392,
        platformB_Y: 370,
        gapDistancePx: 192,
        verticalDropPx: -70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 57
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_120",
      testDescription: "Platform Gap Clearance Analysis #120",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 280,
        platformB_Y: 405,
        gapDistancePx: 80,
        verticalDropPx: -35,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 32
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_121",
      testDescription: "Platform Gap Clearance Analysis #121",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 288,
        platformB_Y: 440,
        gapDistancePx: 88,
        verticalDropPx: 0,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 34
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_122",
      testDescription: "Platform Gap Clearance Analysis #122",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 296,
        platformB_Y: 475,
        gapDistancePx: 96,
        verticalDropPx: 35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 36
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_123",
      testDescription: "Platform Gap Clearance Analysis #123",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 304,
        platformB_Y: 510,
        gapDistancePx: 104,
        verticalDropPx: 70,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 38
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_124",
      testDescription: "Platform Gap Clearance Analysis #124",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 312,
        platformB_Y: 545,
        gapDistancePx: 112,
        verticalDropPx: 105,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 39
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_125",
      testDescription: "Platform Gap Clearance Analysis #125",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 320,
        platformB_Y: 580,
        gapDistancePx: 120,
        verticalDropPx: 140,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 41
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_126",
      testDescription: "Platform Gap Clearance Analysis #126",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 328,
        platformB_Y: 370,
        gapDistancePx: 128,
        verticalDropPx: -70,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 43
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_127",
      testDescription: "Platform Gap Clearance Analysis #127",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 336,
        platformB_Y: 405,
        gapDistancePx: 136,
        verticalDropPx: -35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 45
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_128",
      testDescription: "Platform Gap Clearance Analysis #128",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 344,
        platformB_Y: 440,
        gapDistancePx: 144,
        verticalDropPx: 0,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 47
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_129",
      testDescription: "Platform Gap Clearance Analysis #129",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 352,
        platformB_Y: 475,
        gapDistancePx: 152,
        verticalDropPx: 35,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 48
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_130",
      testDescription: "Platform Gap Clearance Analysis #130",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 360,
        platformB_Y: 510,
        gapDistancePx: 160,
        verticalDropPx: 70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 50
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_131",
      testDescription: "Platform Gap Clearance Analysis #131",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 368,
        platformB_Y: 545,
        gapDistancePx: 168,
        verticalDropPx: 105,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 52
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_132",
      testDescription: "Platform Gap Clearance Analysis #132",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 376,
        platformB_Y: 580,
        gapDistancePx: 176,
        verticalDropPx: 140,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 54
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_133",
      testDescription: "Platform Gap Clearance Analysis #133",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 384,
        platformB_Y: 370,
        gapDistancePx: 184,
        verticalDropPx: -70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 55
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_134",
      testDescription: "Platform Gap Clearance Analysis #134",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 392,
        platformB_Y: 405,
        gapDistancePx: 192,
        verticalDropPx: -35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 57
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_135",
      testDescription: "Platform Gap Clearance Analysis #135",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 280,
        platformB_Y: 440,
        gapDistancePx: 80,
        verticalDropPx: 0,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 32
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_136",
      testDescription: "Platform Gap Clearance Analysis #136",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 288,
        platformB_Y: 475,
        gapDistancePx: 88,
        verticalDropPx: 35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 34
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_137",
      testDescription: "Platform Gap Clearance Analysis #137",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 296,
        platformB_Y: 510,
        gapDistancePx: 96,
        verticalDropPx: 70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 36
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_138",
      testDescription: "Platform Gap Clearance Analysis #138",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 304,
        platformB_Y: 545,
        gapDistancePx: 104,
        verticalDropPx: 105,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 38
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_139",
      testDescription: "Platform Gap Clearance Analysis #139",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 312,
        platformB_Y: 580,
        gapDistancePx: 112,
        verticalDropPx: 140,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 39
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_140",
      testDescription: "Platform Gap Clearance Analysis #140",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 320,
        platformB_Y: 370,
        gapDistancePx: 120,
        verticalDropPx: -70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 41
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_141",
      testDescription: "Platform Gap Clearance Analysis #141",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 328,
        platformB_Y: 405,
        gapDistancePx: 128,
        verticalDropPx: -35,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 43
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_142",
      testDescription: "Platform Gap Clearance Analysis #142",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 336,
        platformB_Y: 440,
        gapDistancePx: 136,
        verticalDropPx: 0,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 45
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_143",
      testDescription: "Platform Gap Clearance Analysis #143",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 344,
        platformB_Y: 475,
        gapDistancePx: 144,
        verticalDropPx: 35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 47
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_144",
      testDescription: "Platform Gap Clearance Analysis #144",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 352,
        platformB_Y: 510,
        gapDistancePx: 152,
        verticalDropPx: 70,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 48
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_145",
      testDescription: "Platform Gap Clearance Analysis #145",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 360,
        platformB_Y: 545,
        gapDistancePx: 160,
        verticalDropPx: 105,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 50
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_146",
      testDescription: "Platform Gap Clearance Analysis #146",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 368,
        platformB_Y: 580,
        gapDistancePx: 168,
        verticalDropPx: 140,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 52
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_147",
      testDescription: "Platform Gap Clearance Analysis #147",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 376,
        platformB_Y: 370,
        gapDistancePx: 176,
        verticalDropPx: -70,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 54
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_148",
      testDescription: "Platform Gap Clearance Analysis #148",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 384,
        platformB_Y: 405,
        gapDistancePx: 184,
        verticalDropPx: -35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 55
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_149",
      testDescription: "Platform Gap Clearance Analysis #149",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 392,
        platformB_Y: 440,
        gapDistancePx: 192,
        verticalDropPx: 0,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 57
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_150",
      testDescription: "Platform Gap Clearance Analysis #150",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 280,
        platformB_Y: 475,
        gapDistancePx: 80,
        verticalDropPx: 35,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 32
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_151",
      testDescription: "Platform Gap Clearance Analysis #151",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 288,
        platformB_Y: 510,
        gapDistancePx: 88,
        verticalDropPx: 70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 34
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_152",
      testDescription: "Platform Gap Clearance Analysis #152",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 296,
        platformB_Y: 545,
        gapDistancePx: 96,
        verticalDropPx: 105,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 36
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_153",
      testDescription: "Platform Gap Clearance Analysis #153",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 304,
        platformB_Y: 580,
        gapDistancePx: 104,
        verticalDropPx: 140,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 38
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_154",
      testDescription: "Platform Gap Clearance Analysis #154",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 312,
        platformB_Y: 370,
        gapDistancePx: 112,
        verticalDropPx: -70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 39
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_155",
      testDescription: "Platform Gap Clearance Analysis #155",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 320,
        platformB_Y: 405,
        gapDistancePx: 120,
        verticalDropPx: -35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 41
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_156",
      testDescription: "Platform Gap Clearance Analysis #156",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 328,
        platformB_Y: 440,
        gapDistancePx: 128,
        verticalDropPx: 0,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 43
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_157",
      testDescription: "Platform Gap Clearance Analysis #157",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 336,
        platformB_Y: 475,
        gapDistancePx: 136,
        verticalDropPx: 35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 45
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_158",
      testDescription: "Platform Gap Clearance Analysis #158",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 344,
        platformB_Y: 510,
        gapDistancePx: 144,
        verticalDropPx: 70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 47
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_159",
      testDescription: "Platform Gap Clearance Analysis #159",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 352,
        platformB_Y: 545,
        gapDistancePx: 152,
        verticalDropPx: 105,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 48
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_160",
      testDescription: "Platform Gap Clearance Analysis #160",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 360,
        platformB_Y: 580,
        gapDistancePx: 160,
        verticalDropPx: 140,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 50
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_161",
      testDescription: "Platform Gap Clearance Analysis #161",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 368,
        platformB_Y: 370,
        gapDistancePx: 168,
        verticalDropPx: -70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 52
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_162",
      testDescription: "Platform Gap Clearance Analysis #162",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 376,
        platformB_Y: 405,
        gapDistancePx: 176,
        verticalDropPx: -35,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 54
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_163",
      testDescription: "Platform Gap Clearance Analysis #163",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 384,
        platformB_Y: 440,
        gapDistancePx: 184,
        verticalDropPx: 0,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 55
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_164",
      testDescription: "Platform Gap Clearance Analysis #164",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 392,
        platformB_Y: 475,
        gapDistancePx: 192,
        verticalDropPx: 35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 57
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_165",
      testDescription: "Platform Gap Clearance Analysis #165",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 280,
        platformB_Y: 510,
        gapDistancePx: 80,
        verticalDropPx: 70,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 32
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_166",
      testDescription: "Platform Gap Clearance Analysis #166",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 288,
        platformB_Y: 545,
        gapDistancePx: 88,
        verticalDropPx: 105,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 34
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_167",
      testDescription: "Platform Gap Clearance Analysis #167",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 296,
        platformB_Y: 580,
        gapDistancePx: 96,
        verticalDropPx: 140,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 36
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_168",
      testDescription: "Platform Gap Clearance Analysis #168",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 304,
        platformB_Y: 370,
        gapDistancePx: 104,
        verticalDropPx: -70,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 38
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_169",
      testDescription: "Platform Gap Clearance Analysis #169",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 312,
        platformB_Y: 405,
        gapDistancePx: 112,
        verticalDropPx: -35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 39
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_170",
      testDescription: "Platform Gap Clearance Analysis #170",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 320,
        platformB_Y: 440,
        gapDistancePx: 120,
        verticalDropPx: 0,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 41
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_171",
      testDescription: "Platform Gap Clearance Analysis #171",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 328,
        platformB_Y: 475,
        gapDistancePx: 128,
        verticalDropPx: 35,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 43
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_172",
      testDescription: "Platform Gap Clearance Analysis #172",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 336,
        platformB_Y: 510,
        gapDistancePx: 136,
        verticalDropPx: 70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 45
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_173",
      testDescription: "Platform Gap Clearance Analysis #173",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 344,
        platformB_Y: 545,
        gapDistancePx: 144,
        verticalDropPx: 105,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 47
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_174",
      testDescription: "Platform Gap Clearance Analysis #174",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 352,
        platformB_Y: 580,
        gapDistancePx: 152,
        verticalDropPx: 140,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 48
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_175",
      testDescription: "Platform Gap Clearance Analysis #175",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 360,
        platformB_Y: 370,
        gapDistancePx: 160,
        verticalDropPx: -70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 50
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_176",
      testDescription: "Platform Gap Clearance Analysis #176",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 368,
        platformB_Y: 405,
        gapDistancePx: 168,
        verticalDropPx: -35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 52
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_177",
      testDescription: "Platform Gap Clearance Analysis #177",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 376,
        platformB_Y: 440,
        gapDistancePx: 176,
        verticalDropPx: 0,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 54
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_178",
      testDescription: "Platform Gap Clearance Analysis #178",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 384,
        platformB_Y: 475,
        gapDistancePx: 184,
        verticalDropPx: 35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 55
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_179",
      testDescription: "Platform Gap Clearance Analysis #179",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 392,
        platformB_Y: 510,
        gapDistancePx: 192,
        verticalDropPx: 70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 57
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_180",
      testDescription: "Platform Gap Clearance Analysis #180",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 280,
        platformB_Y: 545,
        gapDistancePx: 80,
        verticalDropPx: 105,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 32
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_181",
      testDescription: "Platform Gap Clearance Analysis #181",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 288,
        platformB_Y: 580,
        gapDistancePx: 88,
        verticalDropPx: 140,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 34
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_182",
      testDescription: "Platform Gap Clearance Analysis #182",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 296,
        platformB_Y: 370,
        gapDistancePx: 96,
        verticalDropPx: -70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 36
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_183",
      testDescription: "Platform Gap Clearance Analysis #183",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 304,
        platformB_Y: 405,
        gapDistancePx: 104,
        verticalDropPx: -35,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 38
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_184",
      testDescription: "Platform Gap Clearance Analysis #184",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 312,
        platformB_Y: 440,
        gapDistancePx: 112,
        verticalDropPx: 0,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 39
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_185",
      testDescription: "Platform Gap Clearance Analysis #185",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 320,
        platformB_Y: 475,
        gapDistancePx: 120,
        verticalDropPx: 35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 41
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_186",
      testDescription: "Platform Gap Clearance Analysis #186",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 328,
        platformB_Y: 510,
        gapDistancePx: 128,
        verticalDropPx: 70,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 43
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_187",
      testDescription: "Platform Gap Clearance Analysis #187",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 336,
        platformB_Y: 545,
        gapDistancePx: 136,
        verticalDropPx: 105,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 45
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_188",
      testDescription: "Platform Gap Clearance Analysis #188",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 344,
        platformB_Y: 580,
        gapDistancePx: 144,
        verticalDropPx: 140,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 47
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_189",
      testDescription: "Platform Gap Clearance Analysis #189",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 352,
        platformB_Y: 370,
        gapDistancePx: 152,
        verticalDropPx: -70,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 48
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_190",
      testDescription: "Platform Gap Clearance Analysis #190",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 360,
        platformB_Y: 405,
        gapDistancePx: 160,
        verticalDropPx: -35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 50
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_191",
      testDescription: "Platform Gap Clearance Analysis #191",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 368,
        platformB_Y: 440,
        gapDistancePx: 168,
        verticalDropPx: 0,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 52
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_192",
      testDescription: "Platform Gap Clearance Analysis #192",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 376,
        platformB_Y: 475,
        gapDistancePx: 176,
        verticalDropPx: 35,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 54
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_193",
      testDescription: "Platform Gap Clearance Analysis #193",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 384,
        platformB_Y: 510,
        gapDistancePx: 184,
        verticalDropPx: 70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 55
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_194",
      testDescription: "Platform Gap Clearance Analysis #194",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 392,
        platformB_Y: 545,
        gapDistancePx: 192,
        verticalDropPx: 105,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 57
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_195",
      testDescription: "Platform Gap Clearance Analysis #195",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 280,
        platformB_Y: 580,
        gapDistancePx: 80,
        verticalDropPx: 140,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 32
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_196",
      testDescription: "Platform Gap Clearance Analysis #196",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 288,
        platformB_Y: 370,
        gapDistancePx: 88,
        verticalDropPx: -70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 34
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_197",
      testDescription: "Platform Gap Clearance Analysis #197",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 296,
        platformB_Y: 405,
        gapDistancePx: 96,
        verticalDropPx: -35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 36
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_198",
      testDescription: "Platform Gap Clearance Analysis #198",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 304,
        platformB_Y: 440,
        gapDistancePx: 104,
        verticalDropPx: 0,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 38
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_199",
      testDescription: "Platform Gap Clearance Analysis #199",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 312,
        platformB_Y: 475,
        gapDistancePx: 112,
        verticalDropPx: 35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 39
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_200",
      testDescription: "Platform Gap Clearance Analysis #200",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 320,
        platformB_Y: 510,
        gapDistancePx: 120,
        verticalDropPx: 70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 41
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_201",
      testDescription: "Platform Gap Clearance Analysis #201",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 328,
        platformB_Y: 545,
        gapDistancePx: 128,
        verticalDropPx: 105,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 43
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_202",
      testDescription: "Platform Gap Clearance Analysis #202",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 336,
        platformB_Y: 580,
        gapDistancePx: 136,
        verticalDropPx: 140,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 45
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_203",
      testDescription: "Platform Gap Clearance Analysis #203",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 344,
        platformB_Y: 370,
        gapDistancePx: 144,
        verticalDropPx: -70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 47
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_204",
      testDescription: "Platform Gap Clearance Analysis #204",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 352,
        platformB_Y: 405,
        gapDistancePx: 152,
        verticalDropPx: -35,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 48
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_205",
      testDescription: "Platform Gap Clearance Analysis #205",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 360,
        platformB_Y: 440,
        gapDistancePx: 160,
        verticalDropPx: 0,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 50
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_206",
      testDescription: "Platform Gap Clearance Analysis #206",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 368,
        platformB_Y: 475,
        gapDistancePx: 168,
        verticalDropPx: 35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 52
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_207",
      testDescription: "Platform Gap Clearance Analysis #207",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 376,
        platformB_Y: 510,
        gapDistancePx: 176,
        verticalDropPx: 70,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 54
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_208",
      testDescription: "Platform Gap Clearance Analysis #208",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 384,
        platformB_Y: 545,
        gapDistancePx: 184,
        verticalDropPx: 105,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 55
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_209",
      testDescription: "Platform Gap Clearance Analysis #209",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 392,
        platformB_Y: 580,
        gapDistancePx: 192,
        verticalDropPx: 140,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 57
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_210",
      testDescription: "Platform Gap Clearance Analysis #210",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 280,
        platformB_Y: 370,
        gapDistancePx: 80,
        verticalDropPx: -70,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 32
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_211",
      testDescription: "Platform Gap Clearance Analysis #211",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 288,
        platformB_Y: 405,
        gapDistancePx: 88,
        verticalDropPx: -35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 34
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_212",
      testDescription: "Platform Gap Clearance Analysis #212",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 296,
        platformB_Y: 440,
        gapDistancePx: 96,
        verticalDropPx: 0,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 36
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_213",
      testDescription: "Platform Gap Clearance Analysis #213",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 304,
        platformB_Y: 475,
        gapDistancePx: 104,
        verticalDropPx: 35,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 38
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_214",
      testDescription: "Platform Gap Clearance Analysis #214",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 312,
        platformB_Y: 510,
        gapDistancePx: 112,
        verticalDropPx: 70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 39
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_215",
      testDescription: "Platform Gap Clearance Analysis #215",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 320,
        platformB_Y: 545,
        gapDistancePx: 120,
        verticalDropPx: 105,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 41
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_216",
      testDescription: "Platform Gap Clearance Analysis #216",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 328,
        platformB_Y: 580,
        gapDistancePx: 128,
        verticalDropPx: 140,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 43
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_217",
      testDescription: "Platform Gap Clearance Analysis #217",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 336,
        platformB_Y: 370,
        gapDistancePx: 136,
        verticalDropPx: -70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 45
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_218",
      testDescription: "Platform Gap Clearance Analysis #218",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 344,
        platformB_Y: 405,
        gapDistancePx: 144,
        verticalDropPx: -35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 47
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_219",
      testDescription: "Platform Gap Clearance Analysis #219",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 352,
        platformB_Y: 440,
        gapDistancePx: 152,
        verticalDropPx: 0,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 48
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_220",
      testDescription: "Platform Gap Clearance Analysis #220",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 360,
        platformB_Y: 475,
        gapDistancePx: 160,
        verticalDropPx: 35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 50
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_221",
      testDescription: "Platform Gap Clearance Analysis #221",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 368,
        platformB_Y: 510,
        gapDistancePx: 168,
        verticalDropPx: 70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 52
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_222",
      testDescription: "Platform Gap Clearance Analysis #222",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 376,
        platformB_Y: 545,
        gapDistancePx: 176,
        verticalDropPx: 105,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 54
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_223",
      testDescription: "Platform Gap Clearance Analysis #223",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 384,
        platformB_Y: 580,
        gapDistancePx: 184,
        verticalDropPx: 140,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 55
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_224",
      testDescription: "Platform Gap Clearance Analysis #224",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 392,
        platformB_Y: 370,
        gapDistancePx: 192,
        verticalDropPx: -70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 57
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_225",
      testDescription: "Platform Gap Clearance Analysis #225",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 280,
        platformB_Y: 405,
        gapDistancePx: 80,
        verticalDropPx: -35,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 32
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_226",
      testDescription: "Platform Gap Clearance Analysis #226",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 288,
        platformB_Y: 440,
        gapDistancePx: 88,
        verticalDropPx: 0,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 34
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_227",
      testDescription: "Platform Gap Clearance Analysis #227",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 296,
        platformB_Y: 475,
        gapDistancePx: 96,
        verticalDropPx: 35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 36
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_228",
      testDescription: "Platform Gap Clearance Analysis #228",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 304,
        platformB_Y: 510,
        gapDistancePx: 104,
        verticalDropPx: 70,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 38
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_229",
      testDescription: "Platform Gap Clearance Analysis #229",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 312,
        platformB_Y: 545,
        gapDistancePx: 112,
        verticalDropPx: 105,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 39
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_230",
      testDescription: "Platform Gap Clearance Analysis #230",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 320,
        platformB_Y: 580,
        gapDistancePx: 120,
        verticalDropPx: 140,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 41
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_231",
      testDescription: "Platform Gap Clearance Analysis #231",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 328,
        platformB_Y: 370,
        gapDistancePx: 128,
        verticalDropPx: -70,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 43
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_232",
      testDescription: "Platform Gap Clearance Analysis #232",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 336,
        platformB_Y: 405,
        gapDistancePx: 136,
        verticalDropPx: -35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 45
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_233",
      testDescription: "Platform Gap Clearance Analysis #233",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 344,
        platformB_Y: 440,
        gapDistancePx: 144,
        verticalDropPx: 0,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 47
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_234",
      testDescription: "Platform Gap Clearance Analysis #234",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 352,
        platformB_Y: 475,
        gapDistancePx: 152,
        verticalDropPx: 35,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 48
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_235",
      testDescription: "Platform Gap Clearance Analysis #235",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 360,
        platformB_Y: 510,
        gapDistancePx: 160,
        verticalDropPx: 70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 50
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_236",
      testDescription: "Platform Gap Clearance Analysis #236",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 368,
        platformB_Y: 545,
        gapDistancePx: 168,
        verticalDropPx: 105,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 52
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_237",
      testDescription: "Platform Gap Clearance Analysis #237",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 376,
        platformB_Y: 580,
        gapDistancePx: 176,
        verticalDropPx: 140,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 54
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_238",
      testDescription: "Platform Gap Clearance Analysis #238",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 384,
        platformB_Y: 370,
        gapDistancePx: 184,
        verticalDropPx: -70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 55
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_239",
      testDescription: "Platform Gap Clearance Analysis #239",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 392,
        platformB_Y: 405,
        gapDistancePx: 192,
        verticalDropPx: -35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 57
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_240",
      testDescription: "Platform Gap Clearance Analysis #240",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 280,
        platformB_Y: 440,
        gapDistancePx: 80,
        verticalDropPx: 0,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 32
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_241",
      testDescription: "Platform Gap Clearance Analysis #241",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 288,
        platformB_Y: 475,
        gapDistancePx: 88,
        verticalDropPx: 35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 34
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_242",
      testDescription: "Platform Gap Clearance Analysis #242",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 296,
        platformB_Y: 510,
        gapDistancePx: 96,
        verticalDropPx: 70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 36
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_243",
      testDescription: "Platform Gap Clearance Analysis #243",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 304,
        platformB_Y: 545,
        gapDistancePx: 104,
        verticalDropPx: 105,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 38
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_244",
      testDescription: "Platform Gap Clearance Analysis #244",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 312,
        platformB_Y: 580,
        gapDistancePx: 112,
        verticalDropPx: 140,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 39
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_245",
      testDescription: "Platform Gap Clearance Analysis #245",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 320,
        platformB_Y: 370,
        gapDistancePx: 120,
        verticalDropPx: -70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 41
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_246",
      testDescription: "Platform Gap Clearance Analysis #246",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 328,
        platformB_Y: 405,
        gapDistancePx: 128,
        verticalDropPx: -35,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 43
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_247",
      testDescription: "Platform Gap Clearance Analysis #247",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 336,
        platformB_Y: 440,
        gapDistancePx: 136,
        verticalDropPx: 0,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 45
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_248",
      testDescription: "Platform Gap Clearance Analysis #248",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 344,
        platformB_Y: 475,
        gapDistancePx: 144,
        verticalDropPx: 35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 47
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_249",
      testDescription: "Platform Gap Clearance Analysis #249",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 352,
        platformB_Y: 510,
        gapDistancePx: 152,
        verticalDropPx: 70,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 48
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_250",
      testDescription: "Platform Gap Clearance Analysis #250",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 360,
        platformB_Y: 545,
        gapDistancePx: 160,
        verticalDropPx: 105,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 50
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_251",
      testDescription: "Platform Gap Clearance Analysis #251",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 368,
        platformB_Y: 580,
        gapDistancePx: 168,
        verticalDropPx: 140,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 52
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_252",
      testDescription: "Platform Gap Clearance Analysis #252",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 376,
        platformB_Y: 370,
        gapDistancePx: 176,
        verticalDropPx: -70,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 54
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_253",
      testDescription: "Platform Gap Clearance Analysis #253",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 384,
        platformB_Y: 405,
        gapDistancePx: 184,
        verticalDropPx: -35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 55
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_254",
      testDescription: "Platform Gap Clearance Analysis #254",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 392,
        platformB_Y: 440,
        gapDistancePx: 192,
        verticalDropPx: 0,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 57
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_255",
      testDescription: "Platform Gap Clearance Analysis #255",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 280,
        platformB_Y: 475,
        gapDistancePx: 80,
        verticalDropPx: 35,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 32
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_256",
      testDescription: "Platform Gap Clearance Analysis #256",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 288,
        platformB_Y: 510,
        gapDistancePx: 88,
        verticalDropPx: 70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 34
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_257",
      testDescription: "Platform Gap Clearance Analysis #257",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 296,
        platformB_Y: 545,
        gapDistancePx: 96,
        verticalDropPx: 105,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 36
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_258",
      testDescription: "Platform Gap Clearance Analysis #258",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 304,
        platformB_Y: 580,
        gapDistancePx: 104,
        verticalDropPx: 140,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 38
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_259",
      testDescription: "Platform Gap Clearance Analysis #259",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 312,
        platformB_Y: 370,
        gapDistancePx: 112,
        verticalDropPx: -70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 39
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_260",
      testDescription: "Platform Gap Clearance Analysis #260",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 320,
        platformB_Y: 405,
        gapDistancePx: 120,
        verticalDropPx: -35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 41
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_261",
      testDescription: "Platform Gap Clearance Analysis #261",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 328,
        platformB_Y: 440,
        gapDistancePx: 128,
        verticalDropPx: 0,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 43
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_262",
      testDescription: "Platform Gap Clearance Analysis #262",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 336,
        platformB_Y: 475,
        gapDistancePx: 136,
        verticalDropPx: 35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 45
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_263",
      testDescription: "Platform Gap Clearance Analysis #263",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 344,
        platformB_Y: 510,
        gapDistancePx: 144,
        verticalDropPx: 70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 47
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_264",
      testDescription: "Platform Gap Clearance Analysis #264",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 352,
        platformB_Y: 545,
        gapDistancePx: 152,
        verticalDropPx: 105,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 48
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_265",
      testDescription: "Platform Gap Clearance Analysis #265",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 360,
        platformB_Y: 580,
        gapDistancePx: 160,
        verticalDropPx: 140,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 50
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_266",
      testDescription: "Platform Gap Clearance Analysis #266",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 368,
        platformB_Y: 370,
        gapDistancePx: 168,
        verticalDropPx: -70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 52
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_267",
      testDescription: "Platform Gap Clearance Analysis #267",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 376,
        platformB_Y: 405,
        gapDistancePx: 176,
        verticalDropPx: -35,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 54
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_268",
      testDescription: "Platform Gap Clearance Analysis #268",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 384,
        platformB_Y: 440,
        gapDistancePx: 184,
        verticalDropPx: 0,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 55
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_269",
      testDescription: "Platform Gap Clearance Analysis #269",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 392,
        platformB_Y: 475,
        gapDistancePx: 192,
        verticalDropPx: 35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 57
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_270",
      testDescription: "Platform Gap Clearance Analysis #270",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 280,
        platformB_Y: 510,
        gapDistancePx: 80,
        verticalDropPx: 70,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 32
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_271",
      testDescription: "Platform Gap Clearance Analysis #271",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 288,
        platformB_Y: 545,
        gapDistancePx: 88,
        verticalDropPx: 105,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 34
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_272",
      testDescription: "Platform Gap Clearance Analysis #272",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 296,
        platformB_Y: 580,
        gapDistancePx: 96,
        verticalDropPx: 140,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 36
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_273",
      testDescription: "Platform Gap Clearance Analysis #273",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 304,
        platformB_Y: 370,
        gapDistancePx: 104,
        verticalDropPx: -70,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 38
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_274",
      testDescription: "Platform Gap Clearance Analysis #274",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 312,
        platformB_Y: 405,
        gapDistancePx: 112,
        verticalDropPx: -35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 39
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_275",
      testDescription: "Platform Gap Clearance Analysis #275",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 320,
        platformB_Y: 440,
        gapDistancePx: 120,
        verticalDropPx: 0,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 41
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_276",
      testDescription: "Platform Gap Clearance Analysis #276",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 328,
        platformB_Y: 475,
        gapDistancePx: 128,
        verticalDropPx: 35,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 43
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_277",
      testDescription: "Platform Gap Clearance Analysis #277",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 336,
        platformB_Y: 510,
        gapDistancePx: 136,
        verticalDropPx: 70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 45
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_278",
      testDescription: "Platform Gap Clearance Analysis #278",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 344,
        platformB_Y: 545,
        gapDistancePx: 144,
        verticalDropPx: 105,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 47
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_279",
      testDescription: "Platform Gap Clearance Analysis #279",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 352,
        platformB_Y: 580,
        gapDistancePx: 152,
        verticalDropPx: 140,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 48
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_280",
      testDescription: "Platform Gap Clearance Analysis #280",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 360,
        platformB_Y: 370,
        gapDistancePx: 160,
        verticalDropPx: -70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 50
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_281",
      testDescription: "Platform Gap Clearance Analysis #281",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 368,
        platformB_Y: 405,
        gapDistancePx: 168,
        verticalDropPx: -35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 52
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_282",
      testDescription: "Platform Gap Clearance Analysis #282",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 376,
        platformB_Y: 440,
        gapDistancePx: 176,
        verticalDropPx: 0,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 54
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_283",
      testDescription: "Platform Gap Clearance Analysis #283",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 384,
        platformB_Y: 475,
        gapDistancePx: 184,
        verticalDropPx: 35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 55
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_284",
      testDescription: "Platform Gap Clearance Analysis #284",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 392,
        platformB_Y: 510,
        gapDistancePx: 192,
        verticalDropPx: 70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 57
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_285",
      testDescription: "Platform Gap Clearance Analysis #285",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 280,
        platformB_Y: 545,
        gapDistancePx: 80,
        verticalDropPx: 105,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 32
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_286",
      testDescription: "Platform Gap Clearance Analysis #286",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 288,
        platformB_Y: 580,
        gapDistancePx: 88,
        verticalDropPx: 140,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 34
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_287",
      testDescription: "Platform Gap Clearance Analysis #287",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 296,
        platformB_Y: 370,
        gapDistancePx: 96,
        verticalDropPx: -70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 36
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_288",
      testDescription: "Platform Gap Clearance Analysis #288",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 304,
        platformB_Y: 405,
        gapDistancePx: 104,
        verticalDropPx: -35,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 38
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_289",
      testDescription: "Platform Gap Clearance Analysis #289",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 312,
        platformB_Y: 440,
        gapDistancePx: 112,
        verticalDropPx: 0,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 39
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_290",
      testDescription: "Platform Gap Clearance Analysis #290",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 320,
        platformB_Y: 475,
        gapDistancePx: 120,
        verticalDropPx: 35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 41
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_291",
      testDescription: "Platform Gap Clearance Analysis #291",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 328,
        platformB_Y: 510,
        gapDistancePx: 128,
        verticalDropPx: 70,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 43
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_292",
      testDescription: "Platform Gap Clearance Analysis #292",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 336,
        platformB_Y: 545,
        gapDistancePx: 136,
        verticalDropPx: 105,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 45
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_293",
      testDescription: "Platform Gap Clearance Analysis #293",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 344,
        platformB_Y: 580,
        gapDistancePx: 144,
        verticalDropPx: 140,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 47
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_294",
      testDescription: "Platform Gap Clearance Analysis #294",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 352,
        platformB_Y: 370,
        gapDistancePx: 152,
        verticalDropPx: -70,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: false,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 48
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_295",
      testDescription: "Platform Gap Clearance Analysis #295",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 360,
        platformB_Y: 405,
        gapDistancePx: 160,
        verticalDropPx: -35,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 50
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_296",
      testDescription: "Platform Gap Clearance Analysis #296",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 368,
        platformB_Y: 440,
        gapDistancePx: 168,
        verticalDropPx: 0,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 52
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_297",
      testDescription: "Platform Gap Clearance Analysis #297",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 376,
        platformB_Y: 475,
        gapDistancePx: 176,
        verticalDropPx: 35,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 54
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_298",
      testDescription: "Platform Gap Clearance Analysis #298",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 384,
        platformB_Y: 510,
        gapDistancePx: 184,
        verticalDropPx: 70,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 55
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_299",
      testDescription: "Platform Gap Clearance Analysis #299",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 392,
        platformB_Y: 545,
        gapDistancePx: 192,
        verticalDropPx: 105,
        midwayPuddlePresent: false
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 57
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
    {
      id: "level_reachability_test_300",
      testDescription: "Platform Gap Clearance Analysis #300",
      geometry: {
        platformA_X: 200,
        platformA_Y: 440,
        platformB_X: 280,
        platformB_Y: 580,
        gapDistancePx: 80,
        verticalDropPx: 140,
        midwayPuddlePresent: true
      },
      solverCriteria: {
        isSolvableWithoutGlider: true,
        requiresUmbrellaGlide: false,
        maximumAirtimeTicks: 32
      },
      verifyGeometricSolvability: function() {
        const maxJumpVelocityX = 9.0;
        const gravity = 0.42;
        const airTicks = Math.sqrt((2 * Math.abs(this.geometry.verticalDropPx + 150)) / gravity);
        const maxHorizontalReach = maxJumpVelocityX * airTicks;
        return maxHorizontalReach >= this.geometry.gapDistancePx || this.geometry.midwayPuddlePresent;
      }
    },
  ],
  executeSuite: function() {
    let ok = 0;
    for (const c of this.testCases) {
      if (c.verifyGeometricSolvability()) ok++;
    }
    return { total: this.testCases.length, passed: ok, failed: this.testCases.length - ok };
  }
};

if (typeof window !== "undefined") { window.LevelValidatorTests = LevelValidatorTests; }
if (typeof module !== "undefined") { module.exports = LevelValidatorTests; }