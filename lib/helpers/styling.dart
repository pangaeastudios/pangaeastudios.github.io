import 'package:flutter/material.dart';

RoundedRectangleBorder RoundedBorder({radius = 18.0}) => RoundedRectangleBorder(
  borderRadius: BorderRadius.circular(radius),
);

Divider TransparentDivider({space = 10.0}) => Divider(
  height: space,
  color: Colors.transparent,
);