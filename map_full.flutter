
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: "GoogleMap",
      home: GoogleMapPage(),
    );
  }
}

class GoogleMapPage extends StatelessWidget {
  const GoogleMapPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Google Map"),
      ),
      body: GoogleMap(
        mapType: MapType.normal, // 지도 유형
        initialCameraPosition: CameraPosition(target: LatLng(37.43296265331129, -122.08832357078792)),
        onMapCreated: (GoogleMapController controller) {
          // 지도 컨트롤러
        },
      ),
    );
  }
}
