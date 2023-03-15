#!/bin/bash

cd ../db
psql -U postgres -d postgres -a -f create_tables.sql
psql -U postgres -d postgres -a -f import.sql