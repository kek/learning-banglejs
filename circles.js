function barometer() {
  Bangle.setBarometerPower(1, "app");
  Bangle.on('pressure', data => {
    g.reset().clearRect(Bangle.appRect);
    g.setFont("12x20").setFontAlign(0, 0);
    g.drawString("Altitude (M)", 88, 70);
    g.setFont("Vector:40");
    g.drawString(data.altitude.toFixed(1), 88, 105);
  });
  Bangle.loadWidgets();
  Bangle.drawWidgets();
}

function circle() {
  g.clear();
  g.drawCircleAA(176 / 2, 100, 50);
  g.drawCircleAA(176 / 2, 100, 45);
  g.drawCircleAA(176 / 2, 100, 40);
  g.drawCircleAA(176 / 2, 100, 35);
  g.drawCircleAA(176 / 2, 100, 15);
  g.drawLineAA(176 / 2, 0, 176 / 2, 176);
  Bangle.loadWidgets();
  Bangle.drawWidgets();
}

circle();
