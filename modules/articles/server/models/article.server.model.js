'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Reference Schema
 * (HW Assignment 2)
 */
var ReferenceSchema = new Schema({
  name: {
    type: String,
    default: '',
    trim: true,
  },
  link: {
    type: String,
    default: '',
    trim: true,
  }
});


/**
 * Article Schema
 */
var ArticleSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Title cannot be blank!'
  },
  content: {
    type: String,
    default: '',
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  category: {
    type: String,
    default: '',
    trim: true,
    required: 'Category cannot be blank!'
  },
  reference: [{
    type: Schema.ObjectId,
    ref: 'Reference'
  }]
});

mongoose.model('Reference', ReferenceSchema);
mongoose.model('Article', ArticleSchema);
