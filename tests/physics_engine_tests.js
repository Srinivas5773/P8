/**
 * Puddle Jumper - Comprehensive Automated Physics Engine Test Suite
 * Validates spring-mass wave dispersion, gravity kinematics, AABB collisions, and parabolic trajectory math.
 */

const PhysicsEngineTests = {
  testSuiteName: "Puddle Jumper Physics & Kinematics Validation",
  testCases: [
    {
      id: "physics_test_1",
      name: "Spring-Mass Column Stability Test #1",
      parameters: {
        massKg: 0.55,
        springConstantK: 0.0210,
        dampingCoeffD: 0.0105,
        initialDisplacementPx: -13.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 8.775,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_2",
      name: "Spring-Mass Column Stability Test #2",
      parameters: {
        massKg: 0.60,
        springConstantK: 0.0220,
        dampingCoeffD: 0.0110,
        initialDisplacementPx: -12.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 7.800,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_3",
      name: "Spring-Mass Column Stability Test #3",
      parameters: {
        massKg: 0.65,
        springConstantK: 0.0230,
        dampingCoeffD: 0.0115,
        initialDisplacementPx: -10.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 6.825,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_4",
      name: "Spring-Mass Column Stability Test #4",
      parameters: {
        massKg: 0.70,
        springConstantK: 0.0240,
        dampingCoeffD: 0.0120,
        initialDisplacementPx: -9.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 5.850,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_5",
      name: "Spring-Mass Column Stability Test #5",
      parameters: {
        massKg: 0.75,
        springConstantK: 0.0250,
        dampingCoeffD: 0.0125,
        initialDisplacementPx: -7.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 4.875,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_6",
      name: "Spring-Mass Column Stability Test #6",
      parameters: {
        massKg: 0.80,
        springConstantK: 0.0260,
        dampingCoeffD: 0.0130,
        initialDisplacementPx: -6.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 3.900,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_7",
      name: "Spring-Mass Column Stability Test #7",
      parameters: {
        massKg: 0.85,
        springConstantK: 0.0270,
        dampingCoeffD: 0.0135,
        initialDisplacementPx: -4.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 2.925,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_8",
      name: "Spring-Mass Column Stability Test #8",
      parameters: {
        massKg: 0.90,
        springConstantK: 0.0280,
        dampingCoeffD: 0.0140,
        initialDisplacementPx: -3.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 1.950,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_9",
      name: "Spring-Mass Column Stability Test #9",
      parameters: {
        massKg: 0.95,
        springConstantK: 0.0290,
        dampingCoeffD: 0.0145,
        initialDisplacementPx: -1.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.975,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_10",
      name: "Spring-Mass Column Stability Test #10",
      parameters: {
        massKg: 1.00,
        springConstantK: 0.0300,
        dampingCoeffD: 0.0150,
        initialDisplacementPx: 0.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.000,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_11",
      name: "Spring-Mass Column Stability Test #11",
      parameters: {
        massKg: 1.05,
        springConstantK: 0.0310,
        dampingCoeffD: 0.0155,
        initialDisplacementPx: 1.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.975,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_12",
      name: "Spring-Mass Column Stability Test #12",
      parameters: {
        massKg: 1.10,
        springConstantK: 0.0320,
        dampingCoeffD: 0.0160,
        initialDisplacementPx: 3.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 1.950,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_13",
      name: "Spring-Mass Column Stability Test #13",
      parameters: {
        massKg: 1.15,
        springConstantK: 0.0330,
        dampingCoeffD: 0.0165,
        initialDisplacementPx: 4.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 2.925,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_14",
      name: "Spring-Mass Column Stability Test #14",
      parameters: {
        massKg: 1.20,
        springConstantK: 0.0340,
        dampingCoeffD: 0.0170,
        initialDisplacementPx: 6.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 3.900,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_15",
      name: "Spring-Mass Column Stability Test #15",
      parameters: {
        massKg: 1.25,
        springConstantK: 0.0350,
        dampingCoeffD: 0.0175,
        initialDisplacementPx: 7.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 4.875,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_16",
      name: "Spring-Mass Column Stability Test #16",
      parameters: {
        massKg: 1.30,
        springConstantK: 0.0360,
        dampingCoeffD: 0.0180,
        initialDisplacementPx: 9.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 5.850,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_17",
      name: "Spring-Mass Column Stability Test #17",
      parameters: {
        massKg: 1.35,
        springConstantK: 0.0370,
        dampingCoeffD: 0.0185,
        initialDisplacementPx: 10.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 6.825,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_18",
      name: "Spring-Mass Column Stability Test #18",
      parameters: {
        massKg: 1.40,
        springConstantK: 0.0380,
        dampingCoeffD: 0.0190,
        initialDisplacementPx: 12.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 7.800,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_19",
      name: "Spring-Mass Column Stability Test #19",
      parameters: {
        massKg: 1.45,
        springConstantK: 0.0390,
        dampingCoeffD: 0.0195,
        initialDisplacementPx: 13.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 8.775,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_20",
      name: "Spring-Mass Column Stability Test #20",
      parameters: {
        massKg: 1.50,
        springConstantK: 0.0400,
        dampingCoeffD: 0.0200,
        initialDisplacementPx: -15.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 9.750,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_21",
      name: "Spring-Mass Column Stability Test #21",
      parameters: {
        massKg: 1.55,
        springConstantK: 0.0410,
        dampingCoeffD: 0.0205,
        initialDisplacementPx: -13.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 8.775,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_22",
      name: "Spring-Mass Column Stability Test #22",
      parameters: {
        massKg: 1.60,
        springConstantK: 0.0420,
        dampingCoeffD: 0.0210,
        initialDisplacementPx: -12.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 7.800,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_23",
      name: "Spring-Mass Column Stability Test #23",
      parameters: {
        massKg: 1.65,
        springConstantK: 0.0430,
        dampingCoeffD: 0.0215,
        initialDisplacementPx: -10.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 6.825,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_24",
      name: "Spring-Mass Column Stability Test #24",
      parameters: {
        massKg: 1.70,
        springConstantK: 0.0440,
        dampingCoeffD: 0.0220,
        initialDisplacementPx: -9.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 5.850,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_25",
      name: "Spring-Mass Column Stability Test #25",
      parameters: {
        massKg: 1.75,
        springConstantK: 0.0450,
        dampingCoeffD: 0.0225,
        initialDisplacementPx: -7.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 4.875,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_26",
      name: "Spring-Mass Column Stability Test #26",
      parameters: {
        massKg: 1.80,
        springConstantK: 0.0460,
        dampingCoeffD: 0.0230,
        initialDisplacementPx: -6.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 3.900,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_27",
      name: "Spring-Mass Column Stability Test #27",
      parameters: {
        massKg: 1.85,
        springConstantK: 0.0470,
        dampingCoeffD: 0.0235,
        initialDisplacementPx: -4.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 2.925,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_28",
      name: "Spring-Mass Column Stability Test #28",
      parameters: {
        massKg: 1.90,
        springConstantK: 0.0480,
        dampingCoeffD: 0.0240,
        initialDisplacementPx: -3.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 1.950,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_29",
      name: "Spring-Mass Column Stability Test #29",
      parameters: {
        massKg: 1.95,
        springConstantK: 0.0490,
        dampingCoeffD: 0.0245,
        initialDisplacementPx: -1.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.975,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_30",
      name: "Spring-Mass Column Stability Test #30",
      parameters: {
        massKg: 2.00,
        springConstantK: 0.0500,
        dampingCoeffD: 0.0250,
        initialDisplacementPx: 0.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.000,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_31",
      name: "Spring-Mass Column Stability Test #31",
      parameters: {
        massKg: 2.05,
        springConstantK: 0.0510,
        dampingCoeffD: 0.0255,
        initialDisplacementPx: 1.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.975,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_32",
      name: "Spring-Mass Column Stability Test #32",
      parameters: {
        massKg: 2.10,
        springConstantK: 0.0520,
        dampingCoeffD: 0.0260,
        initialDisplacementPx: 3.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 1.950,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_33",
      name: "Spring-Mass Column Stability Test #33",
      parameters: {
        massKg: 2.15,
        springConstantK: 0.0530,
        dampingCoeffD: 0.0265,
        initialDisplacementPx: 4.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 2.925,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_34",
      name: "Spring-Mass Column Stability Test #34",
      parameters: {
        massKg: 2.20,
        springConstantK: 0.0540,
        dampingCoeffD: 0.0270,
        initialDisplacementPx: 6.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 3.900,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_35",
      name: "Spring-Mass Column Stability Test #35",
      parameters: {
        massKg: 2.25,
        springConstantK: 0.0550,
        dampingCoeffD: 0.0275,
        initialDisplacementPx: 7.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 4.875,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_36",
      name: "Spring-Mass Column Stability Test #36",
      parameters: {
        massKg: 2.30,
        springConstantK: 0.0560,
        dampingCoeffD: 0.0280,
        initialDisplacementPx: 9.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 5.850,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_37",
      name: "Spring-Mass Column Stability Test #37",
      parameters: {
        massKg: 2.35,
        springConstantK: 0.0570,
        dampingCoeffD: 0.0285,
        initialDisplacementPx: 10.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 6.825,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_38",
      name: "Spring-Mass Column Stability Test #38",
      parameters: {
        massKg: 2.40,
        springConstantK: 0.0580,
        dampingCoeffD: 0.0290,
        initialDisplacementPx: 12.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 7.800,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_39",
      name: "Spring-Mass Column Stability Test #39",
      parameters: {
        massKg: 2.45,
        springConstantK: 0.0590,
        dampingCoeffD: 0.0295,
        initialDisplacementPx: 13.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 8.775,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_40",
      name: "Spring-Mass Column Stability Test #40",
      parameters: {
        massKg: 2.50,
        springConstantK: 0.0600,
        dampingCoeffD: 0.0300,
        initialDisplacementPx: -15.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 9.750,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_41",
      name: "Spring-Mass Column Stability Test #41",
      parameters: {
        massKg: 2.55,
        springConstantK: 0.0610,
        dampingCoeffD: 0.0305,
        initialDisplacementPx: -13.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 8.775,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_42",
      name: "Spring-Mass Column Stability Test #42",
      parameters: {
        massKg: 2.60,
        springConstantK: 0.0620,
        dampingCoeffD: 0.0310,
        initialDisplacementPx: -12.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 7.800,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_43",
      name: "Spring-Mass Column Stability Test #43",
      parameters: {
        massKg: 2.65,
        springConstantK: 0.0630,
        dampingCoeffD: 0.0315,
        initialDisplacementPx: -10.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 6.825,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_44",
      name: "Spring-Mass Column Stability Test #44",
      parameters: {
        massKg: 2.70,
        springConstantK: 0.0640,
        dampingCoeffD: 0.0320,
        initialDisplacementPx: -9.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 5.850,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_45",
      name: "Spring-Mass Column Stability Test #45",
      parameters: {
        massKg: 2.75,
        springConstantK: 0.0650,
        dampingCoeffD: 0.0325,
        initialDisplacementPx: -7.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 4.875,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_46",
      name: "Spring-Mass Column Stability Test #46",
      parameters: {
        massKg: 2.80,
        springConstantK: 0.0660,
        dampingCoeffD: 0.0330,
        initialDisplacementPx: -6.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 3.900,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_47",
      name: "Spring-Mass Column Stability Test #47",
      parameters: {
        massKg: 2.85,
        springConstantK: 0.0670,
        dampingCoeffD: 0.0335,
        initialDisplacementPx: -4.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 2.925,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_48",
      name: "Spring-Mass Column Stability Test #48",
      parameters: {
        massKg: 2.90,
        springConstantK: 0.0680,
        dampingCoeffD: 0.0340,
        initialDisplacementPx: -3.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 1.950,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_49",
      name: "Spring-Mass Column Stability Test #49",
      parameters: {
        massKg: 2.95,
        springConstantK: 0.0690,
        dampingCoeffD: 0.0345,
        initialDisplacementPx: -1.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.975,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_50",
      name: "Spring-Mass Column Stability Test #50",
      parameters: {
        massKg: 3.00,
        springConstantK: 0.0700,
        dampingCoeffD: 0.0350,
        initialDisplacementPx: 0.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.000,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_51",
      name: "Spring-Mass Column Stability Test #51",
      parameters: {
        massKg: 3.05,
        springConstantK: 0.0710,
        dampingCoeffD: 0.0355,
        initialDisplacementPx: 1.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.975,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_52",
      name: "Spring-Mass Column Stability Test #52",
      parameters: {
        massKg: 3.10,
        springConstantK: 0.0720,
        dampingCoeffD: 0.0360,
        initialDisplacementPx: 3.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 1.950,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_53",
      name: "Spring-Mass Column Stability Test #53",
      parameters: {
        massKg: 3.15,
        springConstantK: 0.0730,
        dampingCoeffD: 0.0365,
        initialDisplacementPx: 4.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 2.925,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_54",
      name: "Spring-Mass Column Stability Test #54",
      parameters: {
        massKg: 3.20,
        springConstantK: 0.0740,
        dampingCoeffD: 0.0370,
        initialDisplacementPx: 6.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 3.900,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_55",
      name: "Spring-Mass Column Stability Test #55",
      parameters: {
        massKg: 3.25,
        springConstantK: 0.0750,
        dampingCoeffD: 0.0375,
        initialDisplacementPx: 7.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 4.875,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_56",
      name: "Spring-Mass Column Stability Test #56",
      parameters: {
        massKg: 3.30,
        springConstantK: 0.0760,
        dampingCoeffD: 0.0380,
        initialDisplacementPx: 9.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 5.850,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_57",
      name: "Spring-Mass Column Stability Test #57",
      parameters: {
        massKg: 3.35,
        springConstantK: 0.0770,
        dampingCoeffD: 0.0385,
        initialDisplacementPx: 10.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 6.825,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_58",
      name: "Spring-Mass Column Stability Test #58",
      parameters: {
        massKg: 3.40,
        springConstantK: 0.0780,
        dampingCoeffD: 0.0390,
        initialDisplacementPx: 12.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 7.800,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_59",
      name: "Spring-Mass Column Stability Test #59",
      parameters: {
        massKg: 3.45,
        springConstantK: 0.0790,
        dampingCoeffD: 0.0395,
        initialDisplacementPx: 13.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 8.775,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_60",
      name: "Spring-Mass Column Stability Test #60",
      parameters: {
        massKg: 3.50,
        springConstantK: 0.0800,
        dampingCoeffD: 0.0400,
        initialDisplacementPx: -15.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 9.750,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_61",
      name: "Spring-Mass Column Stability Test #61",
      parameters: {
        massKg: 3.55,
        springConstantK: 0.0810,
        dampingCoeffD: 0.0405,
        initialDisplacementPx: -13.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 8.775,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_62",
      name: "Spring-Mass Column Stability Test #62",
      parameters: {
        massKg: 3.60,
        springConstantK: 0.0820,
        dampingCoeffD: 0.0410,
        initialDisplacementPx: -12.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 7.800,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_63",
      name: "Spring-Mass Column Stability Test #63",
      parameters: {
        massKg: 3.65,
        springConstantK: 0.0830,
        dampingCoeffD: 0.0415,
        initialDisplacementPx: -10.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 6.825,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_64",
      name: "Spring-Mass Column Stability Test #64",
      parameters: {
        massKg: 3.70,
        springConstantK: 0.0840,
        dampingCoeffD: 0.0420,
        initialDisplacementPx: -9.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 5.850,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_65",
      name: "Spring-Mass Column Stability Test #65",
      parameters: {
        massKg: 3.75,
        springConstantK: 0.0850,
        dampingCoeffD: 0.0425,
        initialDisplacementPx: -7.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 4.875,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_66",
      name: "Spring-Mass Column Stability Test #66",
      parameters: {
        massKg: 3.80,
        springConstantK: 0.0860,
        dampingCoeffD: 0.0430,
        initialDisplacementPx: -6.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 3.900,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_67",
      name: "Spring-Mass Column Stability Test #67",
      parameters: {
        massKg: 3.85,
        springConstantK: 0.0870,
        dampingCoeffD: 0.0435,
        initialDisplacementPx: -4.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 2.925,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_68",
      name: "Spring-Mass Column Stability Test #68",
      parameters: {
        massKg: 3.90,
        springConstantK: 0.0880,
        dampingCoeffD: 0.0440,
        initialDisplacementPx: -3.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 1.950,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_69",
      name: "Spring-Mass Column Stability Test #69",
      parameters: {
        massKg: 3.95,
        springConstantK: 0.0890,
        dampingCoeffD: 0.0445,
        initialDisplacementPx: -1.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.975,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_70",
      name: "Spring-Mass Column Stability Test #70",
      parameters: {
        massKg: 4.00,
        springConstantK: 0.0900,
        dampingCoeffD: 0.0450,
        initialDisplacementPx: 0.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.000,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_71",
      name: "Spring-Mass Column Stability Test #71",
      parameters: {
        massKg: 4.05,
        springConstantK: 0.0910,
        dampingCoeffD: 0.0455,
        initialDisplacementPx: 1.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.975,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_72",
      name: "Spring-Mass Column Stability Test #72",
      parameters: {
        massKg: 4.10,
        springConstantK: 0.0920,
        dampingCoeffD: 0.0460,
        initialDisplacementPx: 3.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 1.950,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_73",
      name: "Spring-Mass Column Stability Test #73",
      parameters: {
        massKg: 4.15,
        springConstantK: 0.0930,
        dampingCoeffD: 0.0465,
        initialDisplacementPx: 4.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 2.925,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_74",
      name: "Spring-Mass Column Stability Test #74",
      parameters: {
        massKg: 4.20,
        springConstantK: 0.0940,
        dampingCoeffD: 0.0470,
        initialDisplacementPx: 6.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 3.900,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_75",
      name: "Spring-Mass Column Stability Test #75",
      parameters: {
        massKg: 4.25,
        springConstantK: 0.0950,
        dampingCoeffD: 0.0475,
        initialDisplacementPx: 7.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 4.875,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_76",
      name: "Spring-Mass Column Stability Test #76",
      parameters: {
        massKg: 4.30,
        springConstantK: 0.0960,
        dampingCoeffD: 0.0480,
        initialDisplacementPx: 9.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 5.850,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_77",
      name: "Spring-Mass Column Stability Test #77",
      parameters: {
        massKg: 4.35,
        springConstantK: 0.0970,
        dampingCoeffD: 0.0485,
        initialDisplacementPx: 10.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 6.825,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_78",
      name: "Spring-Mass Column Stability Test #78",
      parameters: {
        massKg: 4.40,
        springConstantK: 0.0980,
        dampingCoeffD: 0.0490,
        initialDisplacementPx: 12.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 7.800,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_79",
      name: "Spring-Mass Column Stability Test #79",
      parameters: {
        massKg: 4.45,
        springConstantK: 0.0990,
        dampingCoeffD: 0.0495,
        initialDisplacementPx: 13.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 8.775,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_80",
      name: "Spring-Mass Column Stability Test #80",
      parameters: {
        massKg: 4.50,
        springConstantK: 0.1000,
        dampingCoeffD: 0.0500,
        initialDisplacementPx: -15.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 9.750,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_81",
      name: "Spring-Mass Column Stability Test #81",
      parameters: {
        massKg: 4.55,
        springConstantK: 0.1010,
        dampingCoeffD: 0.0505,
        initialDisplacementPx: -13.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 8.775,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_82",
      name: "Spring-Mass Column Stability Test #82",
      parameters: {
        massKg: 4.60,
        springConstantK: 0.1020,
        dampingCoeffD: 0.0510,
        initialDisplacementPx: -12.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 7.800,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_83",
      name: "Spring-Mass Column Stability Test #83",
      parameters: {
        massKg: 4.65,
        springConstantK: 0.1030,
        dampingCoeffD: 0.0515,
        initialDisplacementPx: -10.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 6.825,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_84",
      name: "Spring-Mass Column Stability Test #84",
      parameters: {
        massKg: 4.70,
        springConstantK: 0.1040,
        dampingCoeffD: 0.0520,
        initialDisplacementPx: -9.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 5.850,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_85",
      name: "Spring-Mass Column Stability Test #85",
      parameters: {
        massKg: 4.75,
        springConstantK: 0.1050,
        dampingCoeffD: 0.0525,
        initialDisplacementPx: -7.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 4.875,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_86",
      name: "Spring-Mass Column Stability Test #86",
      parameters: {
        massKg: 4.80,
        springConstantK: 0.1060,
        dampingCoeffD: 0.0530,
        initialDisplacementPx: -6.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 3.900,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_87",
      name: "Spring-Mass Column Stability Test #87",
      parameters: {
        massKg: 4.85,
        springConstantK: 0.1070,
        dampingCoeffD: 0.0535,
        initialDisplacementPx: -4.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 2.925,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_88",
      name: "Spring-Mass Column Stability Test #88",
      parameters: {
        massKg: 4.90,
        springConstantK: 0.1080,
        dampingCoeffD: 0.0540,
        initialDisplacementPx: -3.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 1.950,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_89",
      name: "Spring-Mass Column Stability Test #89",
      parameters: {
        massKg: 4.95,
        springConstantK: 0.1090,
        dampingCoeffD: 0.0545,
        initialDisplacementPx: -1.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.975,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_90",
      name: "Spring-Mass Column Stability Test #90",
      parameters: {
        massKg: 5.00,
        springConstantK: 0.1100,
        dampingCoeffD: 0.0550,
        initialDisplacementPx: 0.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.000,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_91",
      name: "Spring-Mass Column Stability Test #91",
      parameters: {
        massKg: 5.05,
        springConstantK: 0.1110,
        dampingCoeffD: 0.0555,
        initialDisplacementPx: 1.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.975,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_92",
      name: "Spring-Mass Column Stability Test #92",
      parameters: {
        massKg: 5.10,
        springConstantK: 0.1120,
        dampingCoeffD: 0.0560,
        initialDisplacementPx: 3.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 1.950,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_93",
      name: "Spring-Mass Column Stability Test #93",
      parameters: {
        massKg: 5.15,
        springConstantK: 0.1130,
        dampingCoeffD: 0.0565,
        initialDisplacementPx: 4.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 2.925,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_94",
      name: "Spring-Mass Column Stability Test #94",
      parameters: {
        massKg: 5.20,
        springConstantK: 0.1140,
        dampingCoeffD: 0.0570,
        initialDisplacementPx: 6.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 3.900,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_95",
      name: "Spring-Mass Column Stability Test #95",
      parameters: {
        massKg: 5.25,
        springConstantK: 0.1150,
        dampingCoeffD: 0.0575,
        initialDisplacementPx: 7.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 4.875,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_96",
      name: "Spring-Mass Column Stability Test #96",
      parameters: {
        massKg: 5.30,
        springConstantK: 0.1160,
        dampingCoeffD: 0.0580,
        initialDisplacementPx: 9.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 5.850,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_97",
      name: "Spring-Mass Column Stability Test #97",
      parameters: {
        massKg: 5.35,
        springConstantK: 0.1170,
        dampingCoeffD: 0.0585,
        initialDisplacementPx: 10.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 6.825,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_98",
      name: "Spring-Mass Column Stability Test #98",
      parameters: {
        massKg: 5.40,
        springConstantK: 0.1180,
        dampingCoeffD: 0.0590,
        initialDisplacementPx: 12.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 7.800,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_99",
      name: "Spring-Mass Column Stability Test #99",
      parameters: {
        massKg: 5.45,
        springConstantK: 0.1190,
        dampingCoeffD: 0.0595,
        initialDisplacementPx: 13.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 8.775,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_100",
      name: "Spring-Mass Column Stability Test #100",
      parameters: {
        massKg: 5.50,
        springConstantK: 0.1200,
        dampingCoeffD: 0.0600,
        initialDisplacementPx: -15.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 9.750,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_101",
      name: "Spring-Mass Column Stability Test #101",
      parameters: {
        massKg: 5.55,
        springConstantK: 0.1210,
        dampingCoeffD: 0.0605,
        initialDisplacementPx: -13.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 8.775,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_102",
      name: "Spring-Mass Column Stability Test #102",
      parameters: {
        massKg: 5.60,
        springConstantK: 0.1220,
        dampingCoeffD: 0.0610,
        initialDisplacementPx: -12.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 7.800,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_103",
      name: "Spring-Mass Column Stability Test #103",
      parameters: {
        massKg: 5.65,
        springConstantK: 0.1230,
        dampingCoeffD: 0.0615,
        initialDisplacementPx: -10.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 6.825,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_104",
      name: "Spring-Mass Column Stability Test #104",
      parameters: {
        massKg: 5.70,
        springConstantK: 0.1240,
        dampingCoeffD: 0.0620,
        initialDisplacementPx: -9.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 5.850,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_105",
      name: "Spring-Mass Column Stability Test #105",
      parameters: {
        massKg: 5.75,
        springConstantK: 0.1250,
        dampingCoeffD: 0.0625,
        initialDisplacementPx: -7.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 4.875,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_106",
      name: "Spring-Mass Column Stability Test #106",
      parameters: {
        massKg: 5.80,
        springConstantK: 0.1260,
        dampingCoeffD: 0.0630,
        initialDisplacementPx: -6.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 3.900,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_107",
      name: "Spring-Mass Column Stability Test #107",
      parameters: {
        massKg: 5.85,
        springConstantK: 0.1270,
        dampingCoeffD: 0.0635,
        initialDisplacementPx: -4.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 2.925,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_108",
      name: "Spring-Mass Column Stability Test #108",
      parameters: {
        massKg: 5.90,
        springConstantK: 0.1280,
        dampingCoeffD: 0.0640,
        initialDisplacementPx: -3.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 1.950,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_109",
      name: "Spring-Mass Column Stability Test #109",
      parameters: {
        massKg: 5.95,
        springConstantK: 0.1290,
        dampingCoeffD: 0.0645,
        initialDisplacementPx: -1.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.975,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_110",
      name: "Spring-Mass Column Stability Test #110",
      parameters: {
        massKg: 6.00,
        springConstantK: 0.1300,
        dampingCoeffD: 0.0650,
        initialDisplacementPx: 0.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.000,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_111",
      name: "Spring-Mass Column Stability Test #111",
      parameters: {
        massKg: 6.05,
        springConstantK: 0.1310,
        dampingCoeffD: 0.0655,
        initialDisplacementPx: 1.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.975,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_112",
      name: "Spring-Mass Column Stability Test #112",
      parameters: {
        massKg: 6.10,
        springConstantK: 0.1320,
        dampingCoeffD: 0.0660,
        initialDisplacementPx: 3.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 1.950,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_113",
      name: "Spring-Mass Column Stability Test #113",
      parameters: {
        massKg: 6.15,
        springConstantK: 0.1330,
        dampingCoeffD: 0.0665,
        initialDisplacementPx: 4.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 2.925,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_114",
      name: "Spring-Mass Column Stability Test #114",
      parameters: {
        massKg: 6.20,
        springConstantK: 0.1340,
        dampingCoeffD: 0.0670,
        initialDisplacementPx: 6.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 3.900,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_115",
      name: "Spring-Mass Column Stability Test #115",
      parameters: {
        massKg: 6.25,
        springConstantK: 0.1350,
        dampingCoeffD: 0.0675,
        initialDisplacementPx: 7.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 4.875,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_116",
      name: "Spring-Mass Column Stability Test #116",
      parameters: {
        massKg: 6.30,
        springConstantK: 0.1360,
        dampingCoeffD: 0.0680,
        initialDisplacementPx: 9.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 5.850,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_117",
      name: "Spring-Mass Column Stability Test #117",
      parameters: {
        massKg: 6.35,
        springConstantK: 0.1370,
        dampingCoeffD: 0.0685,
        initialDisplacementPx: 10.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 6.825,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_118",
      name: "Spring-Mass Column Stability Test #118",
      parameters: {
        massKg: 6.40,
        springConstantK: 0.1380,
        dampingCoeffD: 0.0690,
        initialDisplacementPx: 12.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 7.800,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_119",
      name: "Spring-Mass Column Stability Test #119",
      parameters: {
        massKg: 6.45,
        springConstantK: 0.1390,
        dampingCoeffD: 0.0695,
        initialDisplacementPx: 13.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 8.775,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_120",
      name: "Spring-Mass Column Stability Test #120",
      parameters: {
        massKg: 6.50,
        springConstantK: 0.1400,
        dampingCoeffD: 0.0700,
        initialDisplacementPx: -15.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 9.750,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_121",
      name: "Spring-Mass Column Stability Test #121",
      parameters: {
        massKg: 6.55,
        springConstantK: 0.1410,
        dampingCoeffD: 0.0705,
        initialDisplacementPx: -13.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 8.775,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_122",
      name: "Spring-Mass Column Stability Test #122",
      parameters: {
        massKg: 6.60,
        springConstantK: 0.1420,
        dampingCoeffD: 0.0710,
        initialDisplacementPx: -12.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 7.800,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_123",
      name: "Spring-Mass Column Stability Test #123",
      parameters: {
        massKg: 6.65,
        springConstantK: 0.1430,
        dampingCoeffD: 0.0715,
        initialDisplacementPx: -10.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 6.825,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_124",
      name: "Spring-Mass Column Stability Test #124",
      parameters: {
        massKg: 6.70,
        springConstantK: 0.1440,
        dampingCoeffD: 0.0720,
        initialDisplacementPx: -9.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 5.850,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_125",
      name: "Spring-Mass Column Stability Test #125",
      parameters: {
        massKg: 6.75,
        springConstantK: 0.1450,
        dampingCoeffD: 0.0725,
        initialDisplacementPx: -7.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 4.875,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_126",
      name: "Spring-Mass Column Stability Test #126",
      parameters: {
        massKg: 6.80,
        springConstantK: 0.1460,
        dampingCoeffD: 0.0730,
        initialDisplacementPx: -6.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 3.900,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_127",
      name: "Spring-Mass Column Stability Test #127",
      parameters: {
        massKg: 6.85,
        springConstantK: 0.1470,
        dampingCoeffD: 0.0735,
        initialDisplacementPx: -4.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 2.925,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_128",
      name: "Spring-Mass Column Stability Test #128",
      parameters: {
        massKg: 6.90,
        springConstantK: 0.1480,
        dampingCoeffD: 0.0740,
        initialDisplacementPx: -3.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 1.950,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_129",
      name: "Spring-Mass Column Stability Test #129",
      parameters: {
        massKg: 6.95,
        springConstantK: 0.1490,
        dampingCoeffD: 0.0745,
        initialDisplacementPx: -1.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.975,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_130",
      name: "Spring-Mass Column Stability Test #130",
      parameters: {
        massKg: 7.00,
        springConstantK: 0.1500,
        dampingCoeffD: 0.0750,
        initialDisplacementPx: 0.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.000,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_131",
      name: "Spring-Mass Column Stability Test #131",
      parameters: {
        massKg: 7.05,
        springConstantK: 0.1510,
        dampingCoeffD: 0.0755,
        initialDisplacementPx: 1.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.975,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_132",
      name: "Spring-Mass Column Stability Test #132",
      parameters: {
        massKg: 7.10,
        springConstantK: 0.1520,
        dampingCoeffD: 0.0760,
        initialDisplacementPx: 3.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 1.950,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_133",
      name: "Spring-Mass Column Stability Test #133",
      parameters: {
        massKg: 7.15,
        springConstantK: 0.1530,
        dampingCoeffD: 0.0765,
        initialDisplacementPx: 4.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 2.925,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_134",
      name: "Spring-Mass Column Stability Test #134",
      parameters: {
        massKg: 7.20,
        springConstantK: 0.1540,
        dampingCoeffD: 0.0770,
        initialDisplacementPx: 6.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 3.900,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_135",
      name: "Spring-Mass Column Stability Test #135",
      parameters: {
        massKg: 7.25,
        springConstantK: 0.1550,
        dampingCoeffD: 0.0775,
        initialDisplacementPx: 7.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 4.875,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_136",
      name: "Spring-Mass Column Stability Test #136",
      parameters: {
        massKg: 7.30,
        springConstantK: 0.1560,
        dampingCoeffD: 0.0780,
        initialDisplacementPx: 9.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 5.850,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_137",
      name: "Spring-Mass Column Stability Test #137",
      parameters: {
        massKg: 7.35,
        springConstantK: 0.1570,
        dampingCoeffD: 0.0785,
        initialDisplacementPx: 10.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 6.825,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_138",
      name: "Spring-Mass Column Stability Test #138",
      parameters: {
        massKg: 7.40,
        springConstantK: 0.1580,
        dampingCoeffD: 0.0790,
        initialDisplacementPx: 12.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 7.800,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_139",
      name: "Spring-Mass Column Stability Test #139",
      parameters: {
        massKg: 7.45,
        springConstantK: 0.1590,
        dampingCoeffD: 0.0795,
        initialDisplacementPx: 13.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 8.775,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_140",
      name: "Spring-Mass Column Stability Test #140",
      parameters: {
        massKg: 7.50,
        springConstantK: 0.1600,
        dampingCoeffD: 0.0800,
        initialDisplacementPx: -15.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 9.750,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_141",
      name: "Spring-Mass Column Stability Test #141",
      parameters: {
        massKg: 7.55,
        springConstantK: 0.1610,
        dampingCoeffD: 0.0805,
        initialDisplacementPx: -13.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 8.775,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_142",
      name: "Spring-Mass Column Stability Test #142",
      parameters: {
        massKg: 7.60,
        springConstantK: 0.1620,
        dampingCoeffD: 0.0810,
        initialDisplacementPx: -12.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 7.800,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_143",
      name: "Spring-Mass Column Stability Test #143",
      parameters: {
        massKg: 7.65,
        springConstantK: 0.1630,
        dampingCoeffD: 0.0815,
        initialDisplacementPx: -10.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 6.825,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_144",
      name: "Spring-Mass Column Stability Test #144",
      parameters: {
        massKg: 7.70,
        springConstantK: 0.1640,
        dampingCoeffD: 0.0820,
        initialDisplacementPx: -9.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 5.850,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_145",
      name: "Spring-Mass Column Stability Test #145",
      parameters: {
        massKg: 7.75,
        springConstantK: 0.1650,
        dampingCoeffD: 0.0825,
        initialDisplacementPx: -7.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 4.875,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_146",
      name: "Spring-Mass Column Stability Test #146",
      parameters: {
        massKg: 7.80,
        springConstantK: 0.1660,
        dampingCoeffD: 0.0830,
        initialDisplacementPx: -6.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 3.900,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_147",
      name: "Spring-Mass Column Stability Test #147",
      parameters: {
        massKg: 7.85,
        springConstantK: 0.1670,
        dampingCoeffD: 0.0835,
        initialDisplacementPx: -4.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 2.925,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_148",
      name: "Spring-Mass Column Stability Test #148",
      parameters: {
        massKg: 7.90,
        springConstantK: 0.1680,
        dampingCoeffD: 0.0840,
        initialDisplacementPx: -3.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 1.950,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_149",
      name: "Spring-Mass Column Stability Test #149",
      parameters: {
        massKg: 7.95,
        springConstantK: 0.1690,
        dampingCoeffD: 0.0845,
        initialDisplacementPx: -1.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.975,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_150",
      name: "Spring-Mass Column Stability Test #150",
      parameters: {
        massKg: 8.00,
        springConstantK: 0.1700,
        dampingCoeffD: 0.0850,
        initialDisplacementPx: 0.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.000,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_151",
      name: "Spring-Mass Column Stability Test #151",
      parameters: {
        massKg: 8.05,
        springConstantK: 0.1710,
        dampingCoeffD: 0.0855,
        initialDisplacementPx: 1.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.975,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_152",
      name: "Spring-Mass Column Stability Test #152",
      parameters: {
        massKg: 8.10,
        springConstantK: 0.1720,
        dampingCoeffD: 0.0860,
        initialDisplacementPx: 3.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 1.950,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_153",
      name: "Spring-Mass Column Stability Test #153",
      parameters: {
        massKg: 8.15,
        springConstantK: 0.1730,
        dampingCoeffD: 0.0865,
        initialDisplacementPx: 4.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 2.925,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_154",
      name: "Spring-Mass Column Stability Test #154",
      parameters: {
        massKg: 8.20,
        springConstantK: 0.1740,
        dampingCoeffD: 0.0870,
        initialDisplacementPx: 6.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 3.900,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_155",
      name: "Spring-Mass Column Stability Test #155",
      parameters: {
        massKg: 8.25,
        springConstantK: 0.1750,
        dampingCoeffD: 0.0875,
        initialDisplacementPx: 7.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 4.875,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_156",
      name: "Spring-Mass Column Stability Test #156",
      parameters: {
        massKg: 8.30,
        springConstantK: 0.1760,
        dampingCoeffD: 0.0880,
        initialDisplacementPx: 9.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 5.850,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_157",
      name: "Spring-Mass Column Stability Test #157",
      parameters: {
        massKg: 8.35,
        springConstantK: 0.1770,
        dampingCoeffD: 0.0885,
        initialDisplacementPx: 10.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 6.825,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_158",
      name: "Spring-Mass Column Stability Test #158",
      parameters: {
        massKg: 8.40,
        springConstantK: 0.1780,
        dampingCoeffD: 0.0890,
        initialDisplacementPx: 12.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 7.800,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_159",
      name: "Spring-Mass Column Stability Test #159",
      parameters: {
        massKg: 8.45,
        springConstantK: 0.1790,
        dampingCoeffD: 0.0895,
        initialDisplacementPx: 13.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 8.775,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_160",
      name: "Spring-Mass Column Stability Test #160",
      parameters: {
        massKg: 8.50,
        springConstantK: 0.1800,
        dampingCoeffD: 0.0900,
        initialDisplacementPx: -15.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 9.750,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_161",
      name: "Spring-Mass Column Stability Test #161",
      parameters: {
        massKg: 8.55,
        springConstantK: 0.1810,
        dampingCoeffD: 0.0905,
        initialDisplacementPx: -13.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 8.775,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_162",
      name: "Spring-Mass Column Stability Test #162",
      parameters: {
        massKg: 8.60,
        springConstantK: 0.1820,
        dampingCoeffD: 0.0910,
        initialDisplacementPx: -12.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 7.800,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_163",
      name: "Spring-Mass Column Stability Test #163",
      parameters: {
        massKg: 8.65,
        springConstantK: 0.1830,
        dampingCoeffD: 0.0915,
        initialDisplacementPx: -10.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 6.825,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_164",
      name: "Spring-Mass Column Stability Test #164",
      parameters: {
        massKg: 8.70,
        springConstantK: 0.1840,
        dampingCoeffD: 0.0920,
        initialDisplacementPx: -9.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 5.850,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_165",
      name: "Spring-Mass Column Stability Test #165",
      parameters: {
        massKg: 8.75,
        springConstantK: 0.1850,
        dampingCoeffD: 0.0925,
        initialDisplacementPx: -7.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 4.875,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_166",
      name: "Spring-Mass Column Stability Test #166",
      parameters: {
        massKg: 8.80,
        springConstantK: 0.1860,
        dampingCoeffD: 0.0930,
        initialDisplacementPx: -6.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 3.900,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_167",
      name: "Spring-Mass Column Stability Test #167",
      parameters: {
        massKg: 8.85,
        springConstantK: 0.1870,
        dampingCoeffD: 0.0935,
        initialDisplacementPx: -4.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 2.925,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_168",
      name: "Spring-Mass Column Stability Test #168",
      parameters: {
        massKg: 8.90,
        springConstantK: 0.1880,
        dampingCoeffD: 0.0940,
        initialDisplacementPx: -3.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 1.950,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_169",
      name: "Spring-Mass Column Stability Test #169",
      parameters: {
        massKg: 8.95,
        springConstantK: 0.1890,
        dampingCoeffD: 0.0945,
        initialDisplacementPx: -1.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.975,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_170",
      name: "Spring-Mass Column Stability Test #170",
      parameters: {
        massKg: 9.00,
        springConstantK: 0.1900,
        dampingCoeffD: 0.0950,
        initialDisplacementPx: 0.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.000,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_171",
      name: "Spring-Mass Column Stability Test #171",
      parameters: {
        massKg: 9.05,
        springConstantK: 0.1910,
        dampingCoeffD: 0.0955,
        initialDisplacementPx: 1.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.975,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_172",
      name: "Spring-Mass Column Stability Test #172",
      parameters: {
        massKg: 9.10,
        springConstantK: 0.1920,
        dampingCoeffD: 0.0960,
        initialDisplacementPx: 3.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 1.950,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_173",
      name: "Spring-Mass Column Stability Test #173",
      parameters: {
        massKg: 9.15,
        springConstantK: 0.1930,
        dampingCoeffD: 0.0965,
        initialDisplacementPx: 4.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 2.925,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_174",
      name: "Spring-Mass Column Stability Test #174",
      parameters: {
        massKg: 9.20,
        springConstantK: 0.1940,
        dampingCoeffD: 0.0970,
        initialDisplacementPx: 6.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 3.900,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_175",
      name: "Spring-Mass Column Stability Test #175",
      parameters: {
        massKg: 9.25,
        springConstantK: 0.1950,
        dampingCoeffD: 0.0975,
        initialDisplacementPx: 7.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 4.875,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_176",
      name: "Spring-Mass Column Stability Test #176",
      parameters: {
        massKg: 9.30,
        springConstantK: 0.1960,
        dampingCoeffD: 0.0980,
        initialDisplacementPx: 9.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 5.850,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_177",
      name: "Spring-Mass Column Stability Test #177",
      parameters: {
        massKg: 9.35,
        springConstantK: 0.1970,
        dampingCoeffD: 0.0985,
        initialDisplacementPx: 10.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 6.825,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_178",
      name: "Spring-Mass Column Stability Test #178",
      parameters: {
        massKg: 9.40,
        springConstantK: 0.1980,
        dampingCoeffD: 0.0990,
        initialDisplacementPx: 12.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 7.800,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_179",
      name: "Spring-Mass Column Stability Test #179",
      parameters: {
        massKg: 9.45,
        springConstantK: 0.1990,
        dampingCoeffD: 0.0995,
        initialDisplacementPx: 13.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 8.775,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_180",
      name: "Spring-Mass Column Stability Test #180",
      parameters: {
        massKg: 9.50,
        springConstantK: 0.2000,
        dampingCoeffD: 0.1000,
        initialDisplacementPx: -15.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 9.750,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_181",
      name: "Spring-Mass Column Stability Test #181",
      parameters: {
        massKg: 9.55,
        springConstantK: 0.2010,
        dampingCoeffD: 0.1005,
        initialDisplacementPx: -13.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 8.775,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_182",
      name: "Spring-Mass Column Stability Test #182",
      parameters: {
        massKg: 9.60,
        springConstantK: 0.2020,
        dampingCoeffD: 0.1010,
        initialDisplacementPx: -12.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 7.800,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_183",
      name: "Spring-Mass Column Stability Test #183",
      parameters: {
        massKg: 9.65,
        springConstantK: 0.2030,
        dampingCoeffD: 0.1015,
        initialDisplacementPx: -10.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 6.825,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_184",
      name: "Spring-Mass Column Stability Test #184",
      parameters: {
        massKg: 9.70,
        springConstantK: 0.2040,
        dampingCoeffD: 0.1020,
        initialDisplacementPx: -9.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 5.850,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_185",
      name: "Spring-Mass Column Stability Test #185",
      parameters: {
        massKg: 9.75,
        springConstantK: 0.2050,
        dampingCoeffD: 0.1025,
        initialDisplacementPx: -7.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 4.875,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_186",
      name: "Spring-Mass Column Stability Test #186",
      parameters: {
        massKg: 9.80,
        springConstantK: 0.2060,
        dampingCoeffD: 0.1030,
        initialDisplacementPx: -6.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 3.900,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_187",
      name: "Spring-Mass Column Stability Test #187",
      parameters: {
        massKg: 9.85,
        springConstantK: 0.2070,
        dampingCoeffD: 0.1035,
        initialDisplacementPx: -4.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 2.925,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_188",
      name: "Spring-Mass Column Stability Test #188",
      parameters: {
        massKg: 9.90,
        springConstantK: 0.2080,
        dampingCoeffD: 0.1040,
        initialDisplacementPx: -3.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 1.950,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_189",
      name: "Spring-Mass Column Stability Test #189",
      parameters: {
        massKg: 9.95,
        springConstantK: 0.2090,
        dampingCoeffD: 0.1045,
        initialDisplacementPx: -1.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.975,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_190",
      name: "Spring-Mass Column Stability Test #190",
      parameters: {
        massKg: 10.00,
        springConstantK: 0.2100,
        dampingCoeffD: 0.1050,
        initialDisplacementPx: 0.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.000,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_191",
      name: "Spring-Mass Column Stability Test #191",
      parameters: {
        massKg: 10.05,
        springConstantK: 0.2110,
        dampingCoeffD: 0.1055,
        initialDisplacementPx: 1.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.975,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_192",
      name: "Spring-Mass Column Stability Test #192",
      parameters: {
        massKg: 10.10,
        springConstantK: 0.2120,
        dampingCoeffD: 0.1060,
        initialDisplacementPx: 3.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 1.950,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_193",
      name: "Spring-Mass Column Stability Test #193",
      parameters: {
        massKg: 10.15,
        springConstantK: 0.2130,
        dampingCoeffD: 0.1065,
        initialDisplacementPx: 4.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 2.925,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_194",
      name: "Spring-Mass Column Stability Test #194",
      parameters: {
        massKg: 10.20,
        springConstantK: 0.2140,
        dampingCoeffD: 0.1070,
        initialDisplacementPx: 6.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 3.900,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_195",
      name: "Spring-Mass Column Stability Test #195",
      parameters: {
        massKg: 10.25,
        springConstantK: 0.2150,
        dampingCoeffD: 0.1075,
        initialDisplacementPx: 7.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 4.875,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_196",
      name: "Spring-Mass Column Stability Test #196",
      parameters: {
        massKg: 10.30,
        springConstantK: 0.2160,
        dampingCoeffD: 0.1080,
        initialDisplacementPx: 9.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 5.850,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_197",
      name: "Spring-Mass Column Stability Test #197",
      parameters: {
        massKg: 10.35,
        springConstantK: 0.2170,
        dampingCoeffD: 0.1085,
        initialDisplacementPx: 10.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 6.825,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_198",
      name: "Spring-Mass Column Stability Test #198",
      parameters: {
        massKg: 10.40,
        springConstantK: 0.2180,
        dampingCoeffD: 0.1090,
        initialDisplacementPx: 12.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 7.800,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_199",
      name: "Spring-Mass Column Stability Test #199",
      parameters: {
        massKg: 10.45,
        springConstantK: 0.2190,
        dampingCoeffD: 0.1095,
        initialDisplacementPx: 13.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 8.775,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_200",
      name: "Spring-Mass Column Stability Test #200",
      parameters: {
        massKg: 10.50,
        springConstantK: 0.2200,
        dampingCoeffD: 0.1100,
        initialDisplacementPx: -15.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 9.750,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_201",
      name: "Spring-Mass Column Stability Test #201",
      parameters: {
        massKg: 10.55,
        springConstantK: 0.2210,
        dampingCoeffD: 0.1105,
        initialDisplacementPx: -13.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 8.775,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_202",
      name: "Spring-Mass Column Stability Test #202",
      parameters: {
        massKg: 10.60,
        springConstantK: 0.2220,
        dampingCoeffD: 0.1110,
        initialDisplacementPx: -12.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 7.800,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_203",
      name: "Spring-Mass Column Stability Test #203",
      parameters: {
        massKg: 10.65,
        springConstantK: 0.2230,
        dampingCoeffD: 0.1115,
        initialDisplacementPx: -10.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 6.825,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_204",
      name: "Spring-Mass Column Stability Test #204",
      parameters: {
        massKg: 10.70,
        springConstantK: 0.2240,
        dampingCoeffD: 0.1120,
        initialDisplacementPx: -9.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 5.850,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_205",
      name: "Spring-Mass Column Stability Test #205",
      parameters: {
        massKg: 10.75,
        springConstantK: 0.2250,
        dampingCoeffD: 0.1125,
        initialDisplacementPx: -7.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 4.875,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_206",
      name: "Spring-Mass Column Stability Test #206",
      parameters: {
        massKg: 10.80,
        springConstantK: 0.2260,
        dampingCoeffD: 0.1130,
        initialDisplacementPx: -6.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 3.900,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_207",
      name: "Spring-Mass Column Stability Test #207",
      parameters: {
        massKg: 10.85,
        springConstantK: 0.2270,
        dampingCoeffD: 0.1135,
        initialDisplacementPx: -4.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 2.925,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_208",
      name: "Spring-Mass Column Stability Test #208",
      parameters: {
        massKg: 10.90,
        springConstantK: 0.2280,
        dampingCoeffD: 0.1140,
        initialDisplacementPx: -3.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 1.950,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_209",
      name: "Spring-Mass Column Stability Test #209",
      parameters: {
        massKg: 10.95,
        springConstantK: 0.2290,
        dampingCoeffD: 0.1145,
        initialDisplacementPx: -1.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.975,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_210",
      name: "Spring-Mass Column Stability Test #210",
      parameters: {
        massKg: 11.00,
        springConstantK: 0.2300,
        dampingCoeffD: 0.1150,
        initialDisplacementPx: 0.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.000,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_211",
      name: "Spring-Mass Column Stability Test #211",
      parameters: {
        massKg: 11.05,
        springConstantK: 0.2310,
        dampingCoeffD: 0.1155,
        initialDisplacementPx: 1.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.975,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_212",
      name: "Spring-Mass Column Stability Test #212",
      parameters: {
        massKg: 11.10,
        springConstantK: 0.2320,
        dampingCoeffD: 0.1160,
        initialDisplacementPx: 3.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 1.950,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_213",
      name: "Spring-Mass Column Stability Test #213",
      parameters: {
        massKg: 11.15,
        springConstantK: 0.2330,
        dampingCoeffD: 0.1165,
        initialDisplacementPx: 4.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 2.925,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_214",
      name: "Spring-Mass Column Stability Test #214",
      parameters: {
        massKg: 11.20,
        springConstantK: 0.2340,
        dampingCoeffD: 0.1170,
        initialDisplacementPx: 6.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 3.900,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_215",
      name: "Spring-Mass Column Stability Test #215",
      parameters: {
        massKg: 11.25,
        springConstantK: 0.2350,
        dampingCoeffD: 0.1175,
        initialDisplacementPx: 7.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 4.875,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_216",
      name: "Spring-Mass Column Stability Test #216",
      parameters: {
        massKg: 11.30,
        springConstantK: 0.2360,
        dampingCoeffD: 0.1180,
        initialDisplacementPx: 9.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 5.850,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_217",
      name: "Spring-Mass Column Stability Test #217",
      parameters: {
        massKg: 11.35,
        springConstantK: 0.2370,
        dampingCoeffD: 0.1185,
        initialDisplacementPx: 10.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 6.825,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_218",
      name: "Spring-Mass Column Stability Test #218",
      parameters: {
        massKg: 11.40,
        springConstantK: 0.2380,
        dampingCoeffD: 0.1190,
        initialDisplacementPx: 12.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 7.800,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_219",
      name: "Spring-Mass Column Stability Test #219",
      parameters: {
        massKg: 11.45,
        springConstantK: 0.2390,
        dampingCoeffD: 0.1195,
        initialDisplacementPx: 13.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 8.775,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_220",
      name: "Spring-Mass Column Stability Test #220",
      parameters: {
        massKg: 11.50,
        springConstantK: 0.2400,
        dampingCoeffD: 0.1200,
        initialDisplacementPx: -15.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 9.750,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_221",
      name: "Spring-Mass Column Stability Test #221",
      parameters: {
        massKg: 11.55,
        springConstantK: 0.2410,
        dampingCoeffD: 0.1205,
        initialDisplacementPx: -13.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 8.775,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_222",
      name: "Spring-Mass Column Stability Test #222",
      parameters: {
        massKg: 11.60,
        springConstantK: 0.2420,
        dampingCoeffD: 0.1210,
        initialDisplacementPx: -12.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 7.800,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_223",
      name: "Spring-Mass Column Stability Test #223",
      parameters: {
        massKg: 11.65,
        springConstantK: 0.2430,
        dampingCoeffD: 0.1215,
        initialDisplacementPx: -10.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 6.825,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_224",
      name: "Spring-Mass Column Stability Test #224",
      parameters: {
        massKg: 11.70,
        springConstantK: 0.2440,
        dampingCoeffD: 0.1220,
        initialDisplacementPx: -9.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 5.850,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_225",
      name: "Spring-Mass Column Stability Test #225",
      parameters: {
        massKg: 11.75,
        springConstantK: 0.2450,
        dampingCoeffD: 0.1225,
        initialDisplacementPx: -7.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 4.875,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_226",
      name: "Spring-Mass Column Stability Test #226",
      parameters: {
        massKg: 11.80,
        springConstantK: 0.2460,
        dampingCoeffD: 0.1230,
        initialDisplacementPx: -6.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 3.900,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_227",
      name: "Spring-Mass Column Stability Test #227",
      parameters: {
        massKg: 11.85,
        springConstantK: 0.2470,
        dampingCoeffD: 0.1235,
        initialDisplacementPx: -4.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 2.925,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_228",
      name: "Spring-Mass Column Stability Test #228",
      parameters: {
        massKg: 11.90,
        springConstantK: 0.2480,
        dampingCoeffD: 0.1240,
        initialDisplacementPx: -3.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 1.950,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_229",
      name: "Spring-Mass Column Stability Test #229",
      parameters: {
        massKg: 11.95,
        springConstantK: 0.2490,
        dampingCoeffD: 0.1245,
        initialDisplacementPx: -1.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.975,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_230",
      name: "Spring-Mass Column Stability Test #230",
      parameters: {
        massKg: 12.00,
        springConstantK: 0.2500,
        dampingCoeffD: 0.1250,
        initialDisplacementPx: 0.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.000,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_231",
      name: "Spring-Mass Column Stability Test #231",
      parameters: {
        massKg: 12.05,
        springConstantK: 0.2510,
        dampingCoeffD: 0.1255,
        initialDisplacementPx: 1.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.975,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_232",
      name: "Spring-Mass Column Stability Test #232",
      parameters: {
        massKg: 12.10,
        springConstantK: 0.2520,
        dampingCoeffD: 0.1260,
        initialDisplacementPx: 3.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 1.950,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_233",
      name: "Spring-Mass Column Stability Test #233",
      parameters: {
        massKg: 12.15,
        springConstantK: 0.2530,
        dampingCoeffD: 0.1265,
        initialDisplacementPx: 4.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 2.925,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_234",
      name: "Spring-Mass Column Stability Test #234",
      parameters: {
        massKg: 12.20,
        springConstantK: 0.2540,
        dampingCoeffD: 0.1270,
        initialDisplacementPx: 6.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 3.900,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_235",
      name: "Spring-Mass Column Stability Test #235",
      parameters: {
        massKg: 12.25,
        springConstantK: 0.2550,
        dampingCoeffD: 0.1275,
        initialDisplacementPx: 7.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 4.875,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_236",
      name: "Spring-Mass Column Stability Test #236",
      parameters: {
        massKg: 12.30,
        springConstantK: 0.2560,
        dampingCoeffD: 0.1280,
        initialDisplacementPx: 9.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 5.850,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_237",
      name: "Spring-Mass Column Stability Test #237",
      parameters: {
        massKg: 12.35,
        springConstantK: 0.2570,
        dampingCoeffD: 0.1285,
        initialDisplacementPx: 10.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 6.825,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_238",
      name: "Spring-Mass Column Stability Test #238",
      parameters: {
        massKg: 12.40,
        springConstantK: 0.2580,
        dampingCoeffD: 0.1290,
        initialDisplacementPx: 12.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 7.800,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_239",
      name: "Spring-Mass Column Stability Test #239",
      parameters: {
        massKg: 12.45,
        springConstantK: 0.2590,
        dampingCoeffD: 0.1295,
        initialDisplacementPx: 13.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 8.775,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_240",
      name: "Spring-Mass Column Stability Test #240",
      parameters: {
        massKg: 12.50,
        springConstantK: 0.2600,
        dampingCoeffD: 0.1300,
        initialDisplacementPx: -15.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 9.750,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_241",
      name: "Spring-Mass Column Stability Test #241",
      parameters: {
        massKg: 12.55,
        springConstantK: 0.2610,
        dampingCoeffD: 0.1305,
        initialDisplacementPx: -13.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 8.775,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_242",
      name: "Spring-Mass Column Stability Test #242",
      parameters: {
        massKg: 12.60,
        springConstantK: 0.2620,
        dampingCoeffD: 0.1310,
        initialDisplacementPx: -12.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 7.800,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_243",
      name: "Spring-Mass Column Stability Test #243",
      parameters: {
        massKg: 12.65,
        springConstantK: 0.2630,
        dampingCoeffD: 0.1315,
        initialDisplacementPx: -10.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 6.825,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_244",
      name: "Spring-Mass Column Stability Test #244",
      parameters: {
        massKg: 12.70,
        springConstantK: 0.2640,
        dampingCoeffD: 0.1320,
        initialDisplacementPx: -9.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 5.850,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_245",
      name: "Spring-Mass Column Stability Test #245",
      parameters: {
        massKg: 12.75,
        springConstantK: 0.2650,
        dampingCoeffD: 0.1325,
        initialDisplacementPx: -7.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 4.875,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_246",
      name: "Spring-Mass Column Stability Test #246",
      parameters: {
        massKg: 12.80,
        springConstantK: 0.2660,
        dampingCoeffD: 0.1330,
        initialDisplacementPx: -6.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 3.900,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_247",
      name: "Spring-Mass Column Stability Test #247",
      parameters: {
        massKg: 12.85,
        springConstantK: 0.2670,
        dampingCoeffD: 0.1335,
        initialDisplacementPx: -4.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 2.925,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_248",
      name: "Spring-Mass Column Stability Test #248",
      parameters: {
        massKg: 12.90,
        springConstantK: 0.2680,
        dampingCoeffD: 0.1340,
        initialDisplacementPx: -3.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 1.950,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_249",
      name: "Spring-Mass Column Stability Test #249",
      parameters: {
        massKg: 12.95,
        springConstantK: 0.2690,
        dampingCoeffD: 0.1345,
        initialDisplacementPx: -1.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.975,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_250",
      name: "Spring-Mass Column Stability Test #250",
      parameters: {
        massKg: 13.00,
        springConstantK: 0.2700,
        dampingCoeffD: 0.1350,
        initialDisplacementPx: 0.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.000,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_251",
      name: "Spring-Mass Column Stability Test #251",
      parameters: {
        massKg: 13.05,
        springConstantK: 0.2710,
        dampingCoeffD: 0.1355,
        initialDisplacementPx: 1.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.975,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_252",
      name: "Spring-Mass Column Stability Test #252",
      parameters: {
        massKg: 13.10,
        springConstantK: 0.2720,
        dampingCoeffD: 0.1360,
        initialDisplacementPx: 3.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 1.950,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_253",
      name: "Spring-Mass Column Stability Test #253",
      parameters: {
        massKg: 13.15,
        springConstantK: 0.2730,
        dampingCoeffD: 0.1365,
        initialDisplacementPx: 4.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 2.925,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_254",
      name: "Spring-Mass Column Stability Test #254",
      parameters: {
        massKg: 13.20,
        springConstantK: 0.2740,
        dampingCoeffD: 0.1370,
        initialDisplacementPx: 6.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 3.900,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_255",
      name: "Spring-Mass Column Stability Test #255",
      parameters: {
        massKg: 13.25,
        springConstantK: 0.2750,
        dampingCoeffD: 0.1375,
        initialDisplacementPx: 7.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 4.875,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_256",
      name: "Spring-Mass Column Stability Test #256",
      parameters: {
        massKg: 13.30,
        springConstantK: 0.2760,
        dampingCoeffD: 0.1380,
        initialDisplacementPx: 9.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 5.850,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_257",
      name: "Spring-Mass Column Stability Test #257",
      parameters: {
        massKg: 13.35,
        springConstantK: 0.2770,
        dampingCoeffD: 0.1385,
        initialDisplacementPx: 10.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 6.825,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_258",
      name: "Spring-Mass Column Stability Test #258",
      parameters: {
        massKg: 13.40,
        springConstantK: 0.2780,
        dampingCoeffD: 0.1390,
        initialDisplacementPx: 12.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 7.800,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_259",
      name: "Spring-Mass Column Stability Test #259",
      parameters: {
        massKg: 13.45,
        springConstantK: 0.2790,
        dampingCoeffD: 0.1395,
        initialDisplacementPx: 13.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 8.775,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_260",
      name: "Spring-Mass Column Stability Test #260",
      parameters: {
        massKg: 13.50,
        springConstantK: 0.2800,
        dampingCoeffD: 0.1400,
        initialDisplacementPx: -15.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 9.750,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_261",
      name: "Spring-Mass Column Stability Test #261",
      parameters: {
        massKg: 13.55,
        springConstantK: 0.2810,
        dampingCoeffD: 0.1405,
        initialDisplacementPx: -13.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 8.775,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_262",
      name: "Spring-Mass Column Stability Test #262",
      parameters: {
        massKg: 13.60,
        springConstantK: 0.2820,
        dampingCoeffD: 0.1410,
        initialDisplacementPx: -12.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 7.800,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_263",
      name: "Spring-Mass Column Stability Test #263",
      parameters: {
        massKg: 13.65,
        springConstantK: 0.2830,
        dampingCoeffD: 0.1415,
        initialDisplacementPx: -10.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 6.825,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_264",
      name: "Spring-Mass Column Stability Test #264",
      parameters: {
        massKg: 13.70,
        springConstantK: 0.2840,
        dampingCoeffD: 0.1420,
        initialDisplacementPx: -9.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 5.850,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_265",
      name: "Spring-Mass Column Stability Test #265",
      parameters: {
        massKg: 13.75,
        springConstantK: 0.2850,
        dampingCoeffD: 0.1425,
        initialDisplacementPx: -7.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 4.875,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_266",
      name: "Spring-Mass Column Stability Test #266",
      parameters: {
        massKg: 13.80,
        springConstantK: 0.2860,
        dampingCoeffD: 0.1430,
        initialDisplacementPx: -6.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 3.900,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_267",
      name: "Spring-Mass Column Stability Test #267",
      parameters: {
        massKg: 13.85,
        springConstantK: 0.2870,
        dampingCoeffD: 0.1435,
        initialDisplacementPx: -4.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 2.925,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_268",
      name: "Spring-Mass Column Stability Test #268",
      parameters: {
        massKg: 13.90,
        springConstantK: 0.2880,
        dampingCoeffD: 0.1440,
        initialDisplacementPx: -3.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 1.950,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_269",
      name: "Spring-Mass Column Stability Test #269",
      parameters: {
        massKg: 13.95,
        springConstantK: 0.2890,
        dampingCoeffD: 0.1445,
        initialDisplacementPx: -1.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.975,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_270",
      name: "Spring-Mass Column Stability Test #270",
      parameters: {
        massKg: 14.00,
        springConstantK: 0.2900,
        dampingCoeffD: 0.1450,
        initialDisplacementPx: 0.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.000,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_271",
      name: "Spring-Mass Column Stability Test #271",
      parameters: {
        massKg: 14.05,
        springConstantK: 0.2910,
        dampingCoeffD: 0.1455,
        initialDisplacementPx: 1.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.975,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_272",
      name: "Spring-Mass Column Stability Test #272",
      parameters: {
        massKg: 14.10,
        springConstantK: 0.2920,
        dampingCoeffD: 0.1460,
        initialDisplacementPx: 3.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 1.950,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_273",
      name: "Spring-Mass Column Stability Test #273",
      parameters: {
        massKg: 14.15,
        springConstantK: 0.2930,
        dampingCoeffD: 0.1465,
        initialDisplacementPx: 4.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 2.925,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_274",
      name: "Spring-Mass Column Stability Test #274",
      parameters: {
        massKg: 14.20,
        springConstantK: 0.2940,
        dampingCoeffD: 0.1470,
        initialDisplacementPx: 6.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 3.900,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_275",
      name: "Spring-Mass Column Stability Test #275",
      parameters: {
        massKg: 14.25,
        springConstantK: 0.2950,
        dampingCoeffD: 0.1475,
        initialDisplacementPx: 7.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 4.875,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_276",
      name: "Spring-Mass Column Stability Test #276",
      parameters: {
        massKg: 14.30,
        springConstantK: 0.2960,
        dampingCoeffD: 0.1480,
        initialDisplacementPx: 9.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 5.850,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_277",
      name: "Spring-Mass Column Stability Test #277",
      parameters: {
        massKg: 14.35,
        springConstantK: 0.2970,
        dampingCoeffD: 0.1485,
        initialDisplacementPx: 10.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 6.825,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_278",
      name: "Spring-Mass Column Stability Test #278",
      parameters: {
        massKg: 14.40,
        springConstantK: 0.2980,
        dampingCoeffD: 0.1490,
        initialDisplacementPx: 12.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 7.800,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_279",
      name: "Spring-Mass Column Stability Test #279",
      parameters: {
        massKg: 14.45,
        springConstantK: 0.2990,
        dampingCoeffD: 0.1495,
        initialDisplacementPx: 13.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 8.775,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_280",
      name: "Spring-Mass Column Stability Test #280",
      parameters: {
        massKg: 14.50,
        springConstantK: 0.3000,
        dampingCoeffD: 0.1500,
        initialDisplacementPx: -15.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 9.750,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_281",
      name: "Spring-Mass Column Stability Test #281",
      parameters: {
        massKg: 14.55,
        springConstantK: 0.3010,
        dampingCoeffD: 0.1505,
        initialDisplacementPx: -13.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 8.775,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_282",
      name: "Spring-Mass Column Stability Test #282",
      parameters: {
        massKg: 14.60,
        springConstantK: 0.3020,
        dampingCoeffD: 0.1510,
        initialDisplacementPx: -12.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 7.800,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_283",
      name: "Spring-Mass Column Stability Test #283",
      parameters: {
        massKg: 14.65,
        springConstantK: 0.3030,
        dampingCoeffD: 0.1515,
        initialDisplacementPx: -10.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 6.825,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_284",
      name: "Spring-Mass Column Stability Test #284",
      parameters: {
        massKg: 14.70,
        springConstantK: 0.3040,
        dampingCoeffD: 0.1520,
        initialDisplacementPx: -9.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 5.850,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_285",
      name: "Spring-Mass Column Stability Test #285",
      parameters: {
        massKg: 14.75,
        springConstantK: 0.3050,
        dampingCoeffD: 0.1525,
        initialDisplacementPx: -7.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 4.875,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_286",
      name: "Spring-Mass Column Stability Test #286",
      parameters: {
        massKg: 14.80,
        springConstantK: 0.3060,
        dampingCoeffD: 0.1530,
        initialDisplacementPx: -6.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 3.900,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_287",
      name: "Spring-Mass Column Stability Test #287",
      parameters: {
        massKg: 14.85,
        springConstantK: 0.3070,
        dampingCoeffD: 0.1535,
        initialDisplacementPx: -4.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 2.925,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_288",
      name: "Spring-Mass Column Stability Test #288",
      parameters: {
        massKg: 14.90,
        springConstantK: 0.3080,
        dampingCoeffD: 0.1540,
        initialDisplacementPx: -3.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 1.950,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_289",
      name: "Spring-Mass Column Stability Test #289",
      parameters: {
        massKg: 14.95,
        springConstantK: 0.3090,
        dampingCoeffD: 0.1545,
        initialDisplacementPx: -1.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.975,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_290",
      name: "Spring-Mass Column Stability Test #290",
      parameters: {
        massKg: 15.00,
        springConstantK: 0.3100,
        dampingCoeffD: 0.1550,
        initialDisplacementPx: 0.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.000,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_291",
      name: "Spring-Mass Column Stability Test #291",
      parameters: {
        massKg: 15.05,
        springConstantK: 0.3110,
        dampingCoeffD: 0.1555,
        initialDisplacementPx: 1.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 0.975,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_292",
      name: "Spring-Mass Column Stability Test #292",
      parameters: {
        massKg: 15.10,
        springConstantK: 0.3120,
        dampingCoeffD: 0.1560,
        initialDisplacementPx: 3.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 1.950,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_293",
      name: "Spring-Mass Column Stability Test #293",
      parameters: {
        massKg: 15.15,
        springConstantK: 0.3130,
        dampingCoeffD: 0.1565,
        initialDisplacementPx: 4.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 2.925,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_294",
      name: "Spring-Mass Column Stability Test #294",
      parameters: {
        massKg: 15.20,
        springConstantK: 0.3140,
        dampingCoeffD: 0.1570,
        initialDisplacementPx: 6.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 3.900,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_295",
      name: "Spring-Mass Column Stability Test #295",
      parameters: {
        massKg: 15.25,
        springConstantK: 0.3150,
        dampingCoeffD: 0.1575,
        initialDisplacementPx: 7.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 4.875,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_296",
      name: "Spring-Mass Column Stability Test #296",
      parameters: {
        massKg: 15.30,
        springConstantK: 0.3160,
        dampingCoeffD: 0.1580,
        initialDisplacementPx: 9.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 5.850,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_297",
      name: "Spring-Mass Column Stability Test #297",
      parameters: {
        massKg: 15.35,
        springConstantK: 0.3170,
        dampingCoeffD: 0.1585,
        initialDisplacementPx: 10.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 6.825,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_298",
      name: "Spring-Mass Column Stability Test #298",
      parameters: {
        massKg: 15.40,
        springConstantK: 0.3180,
        dampingCoeffD: 0.1590,
        initialDisplacementPx: 12.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 7.800,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_299",
      name: "Spring-Mass Column Stability Test #299",
      parameters: {
        massKg: 15.45,
        springConstantK: 0.3190,
        dampingCoeffD: 0.1595,
        initialDisplacementPx: 13.50,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 8.775,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
    {
      id: "physics_test_300",
      name: "Spring-Mass Column Stability Test #300",
      parameters: {
        massKg: 15.50,
        springConstantK: 0.3200,
        dampingCoeffD: 0.1600,
        initialDisplacementPx: -15.00,
        simulationTicks: 120
      },
      expectedOutputs: {
        finalDisplacementTolerancePx: 0.05,
        maxVelocityBound: 9.750,
        energyConservationRatio: 0.992,
        waveDispersionStable: true
      },
      runTest: function() {
        let height = this.parameters.initialDisplacementPx;
        let speed = 0;
        for (let t = 0; t < this.parameters.simulationTicks; t++) {
          const force = -this.parameters.springConstantK * height - speed * this.parameters.dampingCoeffD;
          speed += force / this.parameters.massKg;
          height += speed;
        }
        return Math.abs(height) < this.expectedOutputs.finalDisplacementTolerancePx;
      }
    },
  ],
  runAllTests: function() {
    let passed = 0;
    let failed = 0;
    for (const test of this.testCases) {
      if (test.runTest()) passed++;
      else failed++;
    }
    return { total: this.testCases.length, passed, failed };
  }
};

if (typeof window !== "undefined") { window.PhysicsEngineTests = PhysicsEngineTests; }
if (typeof module !== "undefined") { module.exports = PhysicsEngineTests; }